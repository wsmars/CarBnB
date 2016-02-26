# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160224174250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cars", force: :cascade do |t|
    t.string   "make",                              null: false
    t.string   "model",                             null: false
    t.integer  "year",                              null: false
    t.integer  "milage",                            null: false
    t.float    "price",                             null: false
    t.string   "car_type",                          null: false
    t.text     "description",                       null: false
    t.string   "status",      default: "available", null: false
    t.string   "street",                            null: false
    t.string   "city",                              null: false
    t.string   "state",                             null: false
    t.string   "zip_code",                          null: false
    t.integer  "user_id",                           null: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  add_index "cars", ["user_id"], name: "index_cars_on_user_id", using: :btree
  add_index "cars", ["zip_code"], name: "index_cars_on_zip_code", using: :btree

  create_table "requests", force: :cascade do |t|
    t.integer  "car_id",                         null: false
    t.integer  "user_id",                        null: false
    t.date     "start_date",                     null: false
    t.date     "end_date",                       null: false
    t.string   "status",     default: "pending", null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_index "requests", ["car_id"], name: "index_requests_on_car_id", using: :btree
  add_index "requests", ["user_id"], name: "index_requests_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "email"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
