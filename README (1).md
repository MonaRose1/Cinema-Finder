# Getting Started

To be able to run this application locally you must have the following installed.

- [NodeJS](https://nodejs.org/en/)
- [Yarn (package manager)](https://yarnpkg.com/getting-started/install)

Alternatively this repository will also be available via codesandbox so you can modify and view the code.

If running this application locally key scripts are

- `yarn install` to install dependencies
- `yarn start` to run the application in development mode (will auto-refresh the page when changes are made to the code)
- `yarn build` to build a production version of the code, which can be hosted somewhere.

# Key Terms
- Latitude (lat) -90 through to +90. Representing south to north respectively.
- Longitutde (lon or lng), -180 through to +180. Representing west to east respectively.

# Key Dependencies

This application utilises both MapLibre and Leaflet as mapping libraries, as you can toggle between them.
The relavent code for both, are code-splitted out so it's required for both to be download by the browser.

- [MapLibre](https://maplibre.org/maplibre-gl-js-docs/api/)
- [Leaflet](https://leafletjs.com/reference.html)

Material UI is used as our main style library, utilising the default MUI theme.
- [Material UI](https://mui.com/material-ui/)

React Icons is used for a handful of icons throughout the application.
- [React Icons](https://react-icons.github.io/react-icons/)
