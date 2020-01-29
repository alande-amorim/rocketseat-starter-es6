Rocketseat - Starter ES6
===
Lesson 1. Basic Babel Setup
---

```bash
$ yarn init
$ yarn add @babel/core
$ yarn add @babel/cli
$ yarn add @babel/preset-env
```

Add to package.json:
```json
...
  "scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w"
  }
...
```

Executing
```bash
$ yarn dev
```