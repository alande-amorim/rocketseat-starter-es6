```bash
$ yarn init
$ yarn add @babel/core -D
$ yarn add @babel/cli -D
$ yarn add @babel/preset-env -D
$ yarn add webpack webpack-cli babel-loader -D
$ yarn add webpack-dev-server -D
```

# Webpack Dev Server Setup:

Add to webpack.config.js:
```js
  // ...
  devServer: {
    contentBase: __dirname+ '/public/'
  },
  // ...
```

Modify scripts inside package.json:
```json
  "scripts": {
    "dev": "webpack-dev-server --mode=development",
    "build": "webpack --mode=production"
  }
```

Start webpack development server:
```
$ yarn dev
```

Build:
```
$ yarn build
```
