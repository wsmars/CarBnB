class ChangeColName < ActiveRecord::Migration
  def change
    rename_column :cars, :type, :car_type
    change_column :cars, :status, :string, default: 'available'
  end
end
