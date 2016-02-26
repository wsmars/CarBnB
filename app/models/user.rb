# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#

class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token!

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
  validates :password, length: {minimum: 6, maximum: 12,  allow_nil: true}
  validates_confirmation_of :password

  has_many :cars

  has_many :requests
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    (user && user.is_password?(password)) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private
  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token!
    self.session_token ||= User.generate_session_token
  end

end
