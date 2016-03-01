class AddColumnToCar < ActiveRecord::Migration
  def change
    add_column :cars, :img_url, :string, default: 'default_car.png'
    add_column :cars, :lat, :float
    add_column :cars, :lng, :float
  end
end
