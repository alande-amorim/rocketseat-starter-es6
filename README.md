```bash
$ yarn init
$ yarn add @babel/core -D
$ yarn add @babel/cli -D
$ yarn add @babel/preset-env -D
$ yarn add webpack webpack-cli babel-loader -D

$ yarn dev
```

# Import / Export

- [Named exports (several per module)](##named-exports)
- [Default exports (one per module)](##default-exports)
- [Mixed named & default exports](##mixed-exports)

## Named exports:
Exporting:
```js
// lib.js
export const sqrt = Math.sqrt;
export function square(x) {
  return x*x;
};
export function diag(x, y) {
  return sqrt(square(x) + square(y));
};
```

Importing:
```js
// main.js
import { square, diag } from './lib';
console.log(sqare(11)); // 131
console.log(diag(3, 4)); // 5
```
or:
```js
// main.js
import { * } as lib from './lib';
console.log(lib.sqare(11)); // 131
console.log(lib.diag(3, 4)); // 5
```

## Default exports:
Exporting:
```js
// lib.js
export default function(){
  //...
}
```
Importing:
```js
// main.js
import whateverNameYouWant from './lib';
whateverNameYouWant();
```

## Mixed exports:
Exporting:
```js
// lib.js
export default sum function(a, b){
  return a+b;
}
export function sub(a, b){
  return a-b;
}
export function mult(a, b){
  return a*b;
}
```

Importing:
```js
// main.js
import sum, { sub, mult } from './lib';
console.log(sum(1, 2)); // 3
console.log(sub(4, 3)); // 1
console.log(sub(5, 3)); // 15
```
or: 
```js
// main.js
import sum, * as lib from './lib';
console.log(sum(1, 2)); // 3
console.log(lib.sub(4, 3)); // 1
console.log(lib.sub(5, 3)); // 15
```
