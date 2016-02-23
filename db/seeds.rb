# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Car.destroy_all

User.create!(username: 'wsmars1', password: 123456, email: 'wsmars1@hotmail.com')
User.create!(username: 'wsmars2', password: 123456, email: 'wsmars2@hotmail.com')
User.create!(username: 'wsmars3', password: 123456, email: 'wsmars3@hotmail.com')
User.create!(username: 'wsmars4', password: 123456, email: 'wsmars4@hotmail.com')

Car.create!(make: 'BMW', model: 'M3', year: 2015, milage: 5000, price: 200.00,
            car_type: 'Sports Car', description: 'A fast car', street: '123 Wolf rd.',
            city: 'Sunnyvale', state: 'CA', zip_code: 95014, user_id: 1)
Car.create!(make: 'Toyota', model: 'Camery', year: 2005, milage: 100000, price: 25.00,
            car_type: 'Standard', description: 'A cheap car',
            street: '160 Spear st.', city: 'San Francisco', state: 'CA', zip_code: 94105,
            user_id: 1)
Car.create!(make: 'Honda', model: 'Civic', year: 2012, milage: 25000, price: 50.00,
            car_type: 'Economy', description: 'An economy car',
            street: '100 Miller rd.', city: 'Cupertino', state: 'CA', zip_code: 95014,
            user_id: 2)
Car.create!(make: 'Nissan', model: 'Murano', year: 2014, milage: 15000, price: 100.00,
            car_type: 'SUV', description: 'A big car',
            street: '200 First rd.', city: 'San Jose', state: 'CA', zip_code: 95131,
            user_id: 3)
Car.create!(make: 'Audi', model: 'A8', year: 2016, milage: 3000, price: 300.00,
            car_type: 'Luxury', description: 'A luxury car',
            street: '300 Foothill exp.', city: 'Los Altos', state: 'CA', zip_code: 94022,
            user_id: 4)
Car.create!(make: 'Mecedes-Benz', model: 'GLA', year: 2015, milage: 15000, price: 120.00,
            car_type: 'Convertible', description: 'A confortable car',
            street: '400 Finch rd.', city: 'Cupertino', state: 'CA', zip_code: 95014,
            user_id: 1)
