class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.string :make, null: false
      t.string :model, null: false
      t.integer :year, null: false
      t.integer :milage, null: false
      t.float :price, null: false
      t.string :type, null: false
      t.text :description, null: false
      t.string :status, null: false
      t.integer :street_num, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :cars, :user_id
    add_index :cars, :zip_code
    
  end
end
