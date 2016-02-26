# == Schema Information
#
# Table name: cars
#
#  id          :integer          not null, primary key
#  make        :string           not null
#  model       :string           not null
#  year        :integer          not null
#  milage      :integer          not null
#  price       :float            not null
#  car_type    :string           not null
#  description :text             not null
#  status      :string           default("available"), not null
#  street      :string           not null
#  city        :string           not null
#  state       :string           not null
#  zip_code    :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Car < ActiveRecord::Base
  CAR_TYPE = ['Economy', 'Compact', 'Midsize', 'Standard', 'Fullsize', 'Premium',
              'Luxury', 'Convertible', 'Minivan', 'SUV', 'Sports Car']
  STATUS = ['available', 'pending', 'rent out']
  YEAR = (1960..2017).to_a
  STATE = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL',
           'IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT',
           'NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI',
           'SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

  validates :make, :model, :milage, :price, :description, :street,
            :city, :zip_code, :user_id, presence: true
  validates :year, inclusion: YEAR
  validates :car_type, inclusion: CAR_TYPE
  validates :status, inclusion: STATUS
  validates :state, inclusion: STATE
  validates :zip_code, zipcode: { country_code: :us }

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :requests

end
