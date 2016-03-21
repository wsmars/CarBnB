# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Car.destroy_all


User.create!(username: 'wsmars', password: 123456, email: 'wsmars@hotmail.com')
User.create!(username: 'wsmars1', password: 123456, email: 'wsmars1@hotmail.com')
User.create!(username: 'wsmars2', password: 123456, email: 'wsmars2@hotmail.com')
User.create!(username: 'wsmars3', password: 123456, email: 'wsmars3@hotmail.com')
User.create!(username: 'wsmars4', password: 123456, email: 'wsmars4@hotmail.com')
User.create!(username: 'wsmars5', password: 123456, email: 'wsmars5@hotmail.com')

Car.create!(make: 'BMW', model: 'M3', year: 2015, milage: 5000, price: 200.00,
            car_type: 'Sports Car', description: 'A fast car', street: '235 Presidio Ave',
            city: 'San Francisco', state: 'CA', zip_code: 94115, user_id: 1,
            img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1457342455/2015_bmw_m3_lfnjuj.jpg',
            lat: 37.789417, lng: -122.447575)

Car.create!(make: 'Toyota', model: 'Camry', year: 2005, milage: 100000, price: 25.00,
            car_type: 'Standard', description: 'A cheap car',
            street: '160 Spear st.', city: 'San Francisco', state: 'CA', zip_code: 94105,
            user_id: 1, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1457342455/2005_toyota_camry_re41kv.jpg', lat: 37.7915342, lng: -122.3934448)

Car.create!(make: 'Honda', model: 'Civic si', year: 2012, milage: 25000, price: 50.00,
            car_type: 'Economy', description: 'A sports car',
            street: '10062 Miller Ave', city: 'Cupertino', state: 'CA', zip_code: 95014,
            user_id: 2, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1457342455/2012_honda_civic_si_zakbzp.jpg',
            lat: 37.321967, lng: -122.013783)

Car.create!(make: 'Nissan', model: 'Murano', year: 2014, milage: 15000, price: 100.00,
            car_type: 'SUV', description: 'A big car',
            street: '235 Main St', city: 'San Francisco', state: 'CA', zip_code: 94105,
            user_id: 3, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1457342455/2014_nissan_murano_mlkr1f.jpg',
            lat:  37.79118408029149, lng: -122.3908711197085)

Car.create!(make: 'Audi', model: 'A8', year: 2016, milage: 3000, price: 300.00,
            car_type: 'Luxury', description: 'A luxury car',
            street: '1326 Funston Ave', city: 'San Francisco', state: 'CA', zip_code: 94122,
            user_id: 4, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1457342457/2016_audi_a8_drveeu.jpg',
            lat: 37.763326, lng: -122.470308)

Car.create!(make: 'Mecedes-Benz', model: 'GLA', year: 2015, milage: 15000, price: 120.00,
            car_type: 'Convertible', description: 'A confortable car',
            street: '10151 Finch Ave', city: 'Cupertino', state: 'CA', zip_code: 95014,
            user_id: 2, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1457342455/2015_mercedes_benz_gla_ft7rtm.jpg',
            lat: 37.322040, lng: -122.010506)

Car.create!(make: 'VW', model: 'GTI', year: 2015, milage: 15000, price: 70.00,
            car_type: 'Convertible', description: 'A small car',
            street: '194 Brentwood Ave', city: 'San Francisco', state: 'CA', zip_code: 94127,
            user_id: 3, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1457342455/2015_vw_gti_qggg1y.jpg',
            lat: 37.733922, lng: -122.458925)

Car.create!(make: 'Alfa Romeo', model: '4C Coupe', year: 2015, milage: 9000, price: 220.00,
            car_type: 'Convertible', description: 'A really cool Europe car with 237/HP TURBOCHARGED INLINE 4-CYLINDER!',
            street: '351 King St', city: 'San Francisco', state: 'CA', zip_code: 95014,
            user_id: 6, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1458255671/alfa-romeo-4c_dodteq.jpg',
            lat: 37.775184, lng: -122.394467)

Car.create!(make: 'Lexus', model: 'IS F', year: 2013, milage: 25000, price: 120.00,
            car_type: 'Sports Car',
            description: 'Craving adrenaline? The IS 350 F SPORT offers the ultimate in performance with exclusive upgrades including an Adaptive Variable Suspension, Sport S+ driving mode and available Variable Gear-Ratio Steering (RWD).',
            street: '1727 2nd Ave', city: 'New York', state: 'NY', zip_code: 10128,
            user_id: 5, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1458255671/lexus-is-f_mshu4p.jpg',
            lat: 40.780043, lng: -73.950350)

Car.create!(make: 'Mecedes-Benz', model: 'GLC', year: 2016, milage: 1000, price: 220.00,
            car_type: 'SUV',
            description: '2.0-liter turbocharged four-cylinder that makes 241 hp at 5,500 rpm and 273 lb-ft of torque at 1,300-4,000 rpm.',
            street: '212 E 45th St', city: 'New York', state: 'NY', zip_code: 10017,
            user_id: 6, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1458255670/2016-Mercedes-GLC_ouqtr4.jpg',
            lat: 40.752288, lng: -73.972464)

Car.create!(make: 'BMW', model: 'i8', year: 2015, milage: 4000, price: 300.00,
            car_type: 'Sports Car',
            description: 'a twin-turbo, 3-cylinder 228 horsepower engine combined with a 129-hp electric motor. That means its hybrid all-wheel-drive system gets total output of 357-hp',
            street: '303 W 139th St', city: 'New York', state: 'NY', zip_code: 10030,
            user_id: 5, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1458255674/bmw-i8_lle2ia.jpg',
            lat: 40.819455, lng: -73.945025)

Car.create!(make: 'Porsche', model: 'Cayenne', year: 2010, milage: 75000, price: 100.00,
            car_type: 'SUV',
            description: 'a 4.0-litre V8 and 3.6-litre V8, as well as a turbocharged 2.9-litre V6.',
            street: '539 47th Rd', city: 'Long Island City', state: 'NY', zip_code: 11101,
            user_id: 6, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1458255671/Porsche-Cayenne_buh7n4.jpg',
            lat: 40.745028, lng: -73.954162)

Car.create!(make: 'Audi', model: 'Allroad', year: 2016, milage: 2500, price: 210.00,
            car_type: 'Convertible',
            description: 'It is a steady performer, hitting 60mph in 6.5 seconds, despite packing nearly 400lbs more than the sedan.',
            street: '120 Broadway', city: 'New York', state: 'NY', zip_code: 10271,
            user_id: 6, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1458255669/audi-allroad_wpioyb.jpg',
            lat: 40.708188, lng: -74.010301)

Car.create!(make: 'Lamborghini', model: 'Spyder', year: 2015, milage: 15000, price: 120.00,
            car_type: 'Luxury',
            description: 'the Spyder Performante is the same direct-injected 5.2-liter V10 engine capable of delivering 570 hp and 399 lb-ft of torque',
            street: '100 Morton St', city: 'New York', state: 'NY', zip_code: 10014,
            user_id: 6, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1458255668/Lamborghini-Spyder_tczj7w.jpg',
            lat: 40.731008, lng: -74.009728)

Car.create!(make: 'Google', model: 'Self Driving', year: 2016, milage: 0, price: 1000.00,
            car_type: 'Convertible',
            description: 'The car processes both map and sensor information to determine where it is in the world. Our car knows what street it is on and which lane it is in.',
            street: 'Jacqueline Kennedy Onassis Reservoir', city: 'New York', state: 'NY', zip_code: 10128,
            user_id: 6, img_url: 'http://res.cloudinary.com/dvy2aua0n/image/upload/c_scale,w_900/v1458255675/google-autodrive_sdpsli.jpg',
            lat: 40.786638, lng: -73.962290)
