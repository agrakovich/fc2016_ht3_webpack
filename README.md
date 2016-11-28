# Hometask:
Improve your application for Webpack:
(1-3) stars
- Use Babel as a loader.
- Use style and url loaders. (Sass/less/stylus, autoprefixer optional)
- Each part of logic should be in a separate file. (ES6 modules)
- Use plugins
- Configure the bundler for development and production mode.
- Configure Webpack-dev-server

(4-5) stars
- AMD : 
create button "Show News" on the main page.
your app should load necessary code(css, js) for rendering newsList only after clicking on the button above.
- Сustom loader
loader should be chainable
applicable for /\.json/
remove all number attributes in source

# Install related modules:
```
npm install
```
# Run Webpack:
- development configuration:
```
npm run dev
```
- production configuration:
```
npm run prod
```

- webpack-dev-server: 
```
npm run listen
```

# Custom loader:
For test custom loader fill test.json. Result shows in console.