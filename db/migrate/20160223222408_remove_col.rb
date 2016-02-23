class RemoveCol < ActiveRecord::Migration
  def change
    remove_column :cars, :street_num
  end
end
