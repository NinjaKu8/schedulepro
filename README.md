# Think Crew 2

This Typescript project was bootstrapped with [Vite](https://vitejs.dev/), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template. All original code is the property of Think Crew, LLC. 

*readme last updated 2023-09-23*

## Install

1. Clone repo with `git clone git@github.com:thinkcrew/thinkcrew2.git`
2. Run `npm install` to install all node-modules
3. Create a local `/.env` file in the root folder. This file name is already gitIgnored. File should contain:
```
VITE_APP_VERSION=${npm_package_version}
VITE_APP_PUBLIC_URL=https://thinkcrew.com
VITE_APP_STRIPE_PUBLIC_KEY=(CONTACT ADMIN FOR KEY, IF NECESSARY)

VITE_PORT=3001
GENERATE_SOURCEMAP=false

CHOKIDAR_USEPOLLING=TRUE
NODE_PATH=./

VITE_APP_CLOUD_NAME=(CONTACT ADMIN FOR KEY, IF NECESSARY)
VITE_APP_PRESET_NAME=(CONTACT ADMIN FOR KEY, IF NECESSARY)
VITE_APP_CLOUDINARY_URL=(CONTACT ADMIN FOR KEY, IF NECESSARY)
```
4. Start with `npm start`

## Git Branches

 - `main` - this is the production version of the site

For working branches, please create separate unique branches from `main` that can be merged via pull requests.