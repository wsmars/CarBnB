# Schema Information

## cars
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
make        | string    | not null
year        | text      | not null
milage      | integer   | not null
type        | string    | not null, (SUV, Sedan, Sports...)
description | string    | not null
status      | string    | not null, (available, pending)
hoster_id   | integer   | not null, foreign key (references users(hoster)), indexed
location_id | integer   | not null, foreign key (references location), indexed
availability| boolean   | not null, default: false
images_ulr  | array     |

## location
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
car_id      | integer   | not null, foreign key (references cars), indexed
street_#    | integer   | not null
street_name | string    | not null
city        | string    | not null
state       | string    | not null
zip_code    | integer   | not null

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
car_id      | integer   | not null, foreign key (references cars), indexed
start_date  | date      | not null
end_date    | date      | not null
status      | string    | not null, only: (approved or pending)
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
user_type       | string    | not null, only: (client, hoster)
email           | string    | not null
