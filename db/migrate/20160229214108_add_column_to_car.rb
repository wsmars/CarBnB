class AddColumnToCar < ActiveRecord::Migration
  def change
    add_column :cars, :img_url, :string, default: 'default_car.png'
  end
end
