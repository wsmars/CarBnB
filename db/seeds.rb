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
User.create!(username: 'wsmars5', password: 123456, email: 'wsmars5@hotmail.com')

Car.create!(make: 'BMW', model: 'M3', year: 2015, milage: 5000, price: 200.00,
            car_type: 'Sports Car', description: 'A fast car', street: '192 Beale St',
            city: 'San Francisco', state: 'CA', zip_code: 94105, user_id: 1,
            img_url: '2015_bmw_m3.jpg', lat: 37.7914342802915, lng: -122.3932548197085)

Car.create!(make: 'Toyota', model: 'Camry', year: 2005, milage: 100000, price: 25.00,
            car_type: 'Standard', description: 'A cheap car',
            street: '160 Spear st.', city: 'San Francisco', state: 'CA', zip_code: 94105,
            user_id: 1, img_url: '2005_toyota_camry.jpg', lat: 37.7915342, lng: -122.3934448)

Car.create!(make: 'Honda', model: 'Civic si', year: 2012, milage: 25000, price: 50.00,
            car_type: 'Economy', description: 'A sports car',
            street: '10062 Miller Ave', city: 'Cupertino', state: 'CA', zip_code: 95014,
            user_id: 2, img_url: '2012_honda_civic_si.jpg', lat: 37.321967, lng: -122.013783)

Car.create!(make: 'Nissan', model: 'Murano', year: 2014, milage: 15000, price: 100.00,
            car_type: 'SUV', description: 'A big car',
            street: '235 Main St', city: 'San Francisco', state: 'CA', zip_code: 94105,
            user_id: 3, img_url: '2014_nissan_murano.jpg', lat:  37.79118408029149,
            lng: -122.3908711197085)

Car.create!(make: 'Audi', model: 'A8', year: 2016, milage: 3000, price: 300.00,
            car_type: 'Luxury', description: 'A luxury car',
            street: '350 Mission St', city: 'San Francisco', state: 'CA', zip_code: 94105,
            user_id: 4, img_url: '2016_audi_a8.jpg', lat: 37.790667 , lng: -122.396668)

Car.create!(make: 'Mecedes-Benz', model: 'GLA', year: 2015, milage: 15000, price: 120.00,
            car_type: 'Convertible', description: 'A confortable car',
            street: '10151 Finch Ave', city: 'Cupertino', state: 'CA', zip_code: 95014,
            user_id: 1, img_url: '2015_mercedes_benz_gla.jpg', lat: 37.322040, lng: -122.010506)

Car.create!(make: 'VW', model: 'GTI', year: 2015, milage: 15000, price: 70.00,
            car_type: 'Convertible', description: 'A small car', status: 'rent out',
            street: '1 Pine St', city: 'San Francisco', state: 'CA', zip_code: 94111,
            user_id: 2, img_url: '2015_vw_gti.jpg', lat: 37.792473, lng: -122.397612)
