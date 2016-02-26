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

require 'test_helper'

class CarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
