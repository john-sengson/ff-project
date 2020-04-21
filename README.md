# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider these steps:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`. The assets built by webpack are placed in `server/public`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.

## Separate client/server

The boilerplate is also set up to host the client using `webpack-dev-server` with hot module reloading etc. To use this method, in one terminal run:
```sh
npm run client
```
and in the other:
```sh
npm run server
```
The client will be available on http://localhost:8080 and the server on http://localhost:3000. Note that you will still need to manage CORS between the two, as they are on different ports.

# Final Fantasy Personal Project

This is my personal project which I have decided to continue after numerous changes to what I was going to do.
Presentation will be what the characters page will be.
Stretch goals will be what the real project is about.
It is an app which gives out data about Final Fantasy characters.
It is going to be an ongoing project where in any collected new data will be added.
As new games, characters, and mobile apps are build, the final fantasy world is just increasing.
The aim is for my current data base which I have collected from apis, wiki, and other related searches to be all in one app for everyone who loes FF to enjoy.


# Plan of attack
- [x] Set up repo
- [x] Update ReadMe to have project outline, mvp, and stretches
- [x] Install dependencies
- [ ] Update database with files collected
- [ ] Make Header, App, Character List components
- [ ] Show all character names or maaybe more ?
- [ ] Design page

# Strecth
- [ ] Change the main page to have search inputs
- [ ] Make Another Page for each Final Fantasy games 1 to 15 (to include remakes and mobile games as well)
- [ ] Be able to Add content on the page for new data such as new Characters, games, etc
