# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Cars

- `GET /api/cars`
  - Cars index/search
  - accepts `location` query param to list notes by tag
  - accepts pagination params (if I get there)
- `POST /api/cars`
- `GET /api/cars/:id`
- `PATCH /api/cars/:id`
- `DELETE /api/cars/:id`

### Locations

- `GET /api/locations`
- `POST /api/locations`
- `GET /api/locations/:id`
- `PATCH /api/locations/:id`
- `DELETE /api/locations/:id`
- `GET /api/locations/:id/cars`
  - index of all cars for a location
  - accepts pagination params (if I get there)

### Request

- A user's request will be included in the car show template
- `POST /api/cars/:car_id/`: add username, request_status to the page
- `DELETE /api/cars/:car_id/requests/:request_id`: remove tag from car by request_id
