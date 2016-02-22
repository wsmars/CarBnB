# Flux Stores

### CarStore

Holds all persisted note data.

##### Actions:
- `receiveAllCars`
- `receiveSingleCar`
- `removeCar`

##### Listeners:
- `CarsIndex` (passes to `CarIndexItem` via props)
- `CarDetail`

### CarFormStore

Holds un-persisted car data to send to the API.

##### Actions:
- `receiveCarFormParams`

##### Listeners:
- `CarForm`

### LocationStore

Holds all persisted location data.

##### Actions:
- `receiveAllLocation`
- `receiveSingleLocation`
- `removeLocation`

##### Listeners:
- `LocationIndex`

### LocationFormStore

Holds un-persisted location data to send to the API.

##### Actions:
- `receiveLocationFormParams`

##### Listeners:
- `LocationForm`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
