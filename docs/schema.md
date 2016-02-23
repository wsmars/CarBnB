# Schema Information

## cars
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
make        | string    | not null
year        | text      | not null
milage      | integer   | not null
type        | string    | not null, (No preference, Economy, Compact, Midsize, Standard, Fullsize, Premium, Luxury, Convertible, Minivan, Sports Utility Vehicles, Sports Car)
description | string    | not null
status      | string    | not null, (available, pending)
user_id     | integer   | not null, foreign key (references users(hoster)), indexed
availability| boolean   | not null, default: true
price       | float     | not null
street_#    | integer   | not null
street_name | string    | not null
city        | string    | not null
state       | string    | not null
zip_code    | integer   | not null

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
images_url  | string    | not null
car_id      | integer   | not null, foreign key (references cars), indexed


<!-- ## location
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
street_#    | integer   | not null
street_name | string    | not null
city        | string    | not null
state       | string    | not null
zip_code    | integer   | not null -->




## reminder
<!-- column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
car_id      | integer   | not null, foreign key (references cars), indexed
date        | datetime  | not null
type        | string    | not null
prev_id     | integer   | foreign key (references reminders), indexed -->

## request
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
car_id      | integer   | not null, foreign key (references cars, indexed
start_date  | date      | not null
end_date    | date      | not null
status      | string    | not null, only: (approved or pending), default: pending
user_id     | string    | not null, foreign key (references users), indexed

<!-- ## review
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | text      |
user_id     | integer   | not null, foreign key (references users(hoster)), indexed
car_id      | integer   | not null, foreign key (references cars), indexed -->

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
email           | string    | not null
