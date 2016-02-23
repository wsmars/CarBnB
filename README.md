# CarBnB

[AirBnB link][airbnb] **NB:** This should be a link to your production site

[airbnb]: https://www.airbnb.com/

## Minimum Viable Product

CarBnB is a web application inspired by AirBnB built using Ruby on Rails
and React.js. CarBnB allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account, become a hoster or client
- [ ] Log in / Log out
- [ ] add, edit, and delete cars (Hoster)
- [ ] Organize cars within Car Location
- [ ] Search cars by zip code (Cliend)
- [ ] Request car (Client)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Cars Model, API, and basic APIUtil (1.5 days)

**Objective:** Cars can be created, viewed, edited and destroyed through
the API.

- [ ] create `Car` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for cars (`CarssController`)
- [ ] jBuilder views for cars
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Cars can be created, viewed, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each car component, building out the flux loop as needed.
  - [ ] `CarsIndex`
  - [ ] `CarIndexItem`
  - [ ] `CarForm`
- [ ] save Cars to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Car_style (1 day)

**Objective:** Cars belong to CarLocation, and can be viewed by car_location.

- [ ] create `CarLocation` model
- build out API, Flux loop, and components for:
  - [ ] car_location CRUD
  - [ ] adding cars requires a car_location
  - [ ] moving cars to a different car_location(option)
  - [ ] viewing cars by car_location
- Use CSS to style new views

Phase 3 adds organization to the Cars. Cars belong to a car_location,
which has its own `Index` view.

### Phase 6:  (1.5 days)

**Objective:** Cars can be request by a client, and car_location are searchable.

- [ ] create `CarRequest` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching available cars by car_location
  - [ ] creating request_sheet form
  - [ ] get request to a car
  - [ ] send request email to hoster
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Cars (0.5 days)

**objective:** Enable complex styling of cars.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Automatic get user's coordinates, and fetch available cars in his area
- [ ] Add favorite hoster, client is able to view his favorite list
- [ ] Add loading page, when client search
- [ ] Set reminder on rental period will end soon
- [ ] Leave review after the rental period end

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
