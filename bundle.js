"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var arr = [1, 3, 4, 6, 7, 9]; // map

var newArr = arr.map(function (item, index) {
  return item * 2;
});
console.log(newArr); // reduce

var sum = arr.reduce(function (soma, next) {
  return soma + next;
});
console.log(sum); // filter

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // find

var find = arr.find(function (item) {
  return item === 4;
});
console.log(7); // arrow function

var arrow1 = arr.map(function (item, index) {
  return item * 2;
});
var arrow2 = arr.filter(function (item) {
  return item % 2 === 0;
});
var arrow3 = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(arrow3);

var teste = function teste() {
  return {
    nome: 'alande'
  };
};

var teste2 = function teste2() {
  return {
    nome: 'alande'
  };
};

console.log(teste2()); // desestruturação

var usuario = {
  nome: 'alande',
  idade: 30,
  endereco: {
    cidade: 'Recife',
    estado: 'PE'
  }
};
var _usuario = usuario,
    nome = _usuario.nome,
    idade = _usuario.idade,
    cidade = _usuario.endereco.cidade;
console.log(nome, idade, cidade); // REST e SPREAD
// REST

var usuario = {
  nome: 'alande',
  idade: 30,
  cidade: 'recife'
};

var _usuario2 = usuario,
    nome = _usuario2.nome,
    resto = _objectWithoutProperties(_usuario2, ["nome"]);

console.log(nome, resto);
var arr = [1, 2, 3, 4, 5];

var _arr = arr,
    _arr2 = _toArray(_arr),
    a = _arr2[0],
    b = _arr2[1],
    c = _arr2.slice(2);

console.log(a, b, c); // function soma(a, b) {
//     return a+b;
// }
// function soma(a, b, c) {
//     return a+b+c;
// }

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (sum, next) {
    return sum + next;
  });
}

console.log(soma(1, 2, 3, 4, 5)); // SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var usuario = {
  nome: 'alande',
  idade: 30,
  cidade: 'recife'
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Alande Amorim'
});

console.log(usuario2);
