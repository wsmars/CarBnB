class ChangeDefaultImgUrl < ActiveRecord::Migration
  def change
    change_column :cars, :img_url, :string, default: 'http://res.cloudinary.com/dvy2aua0n/image/upload/v1457342456/default_car_gmkz8w.jpg'
  end
end
