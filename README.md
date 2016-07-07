# CarBnB

[CarBnB][amzn], is a Single Page Application built with Ruby on Rails,
PostgreSQL, React.js, Flux, Google Maps API v3, jQuery and jQuery-ui.

[amzn]: http://www.coolcarkit.com/

## Features
<!-- This is a Markdown checklist. Use it to keep track of your progress! -->
- User login/ account signup
- Searching for cars in current Google Maps view
- View car details with car pictures
- Become local host, post a car
- Make car reservations

## Design Docs

- [Database Schema][schema]

[schema]: ./docs/schema.md

## Code

### Backend
- Ruby on Rails with PostgreSQL
- Controllers handle data through JSON API upon AJAX request

### Frontend
- Single Page Application, powered by React/Flux/ReactRouter
- SessionStore to track and manage user login status
- jQuery for ajax request
