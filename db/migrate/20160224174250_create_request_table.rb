class CreateRequestTable < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :car_id, null: false
      t.integer :user_id, null: false
      t.date    :start_date, null: false
      t.date    :end_date, null: false
      t.string  :status, null: false, default: 'pending'

      t.timestamps null: false
    end
    add_index :requests, :car_id
    add_index :requests, :user_id
  end
end
