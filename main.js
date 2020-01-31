var arr = [1, 3, 4, 6, 7, 9];

// map
const newArr = arr.map((item, index) => {
    return item * 2;
});
console.log(newArr); 

// reduce
const sum = arr.reduce(function(soma, next) {
    return soma + next;
});
console.log(sum);

// filter
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

// find
const find = arr.find(function(item){
    return item === 4;
});
console.log(7);

// arrow function
const arrow1 = arr.map((item, index) => {
    return item * 2;
});

const arrow2 = arr.filter(item => {
    return item % 2 === 0;
});

const arrow3 = arr.filter(item => item % 2 === 0);
console.log(arrow3);


const teste = () => ({ nome: 'alande' });
const teste2 = () => { 
    return { nome: 'alande' }
}
console.log(teste2());

// desestruturação
var usuario = {
    nome: 'alande',
    idade: 30,
    endereco: {
        cidade: 'Recife',
        estado: 'PE'
    }
}

var { nome, idade, endereco: { cidade } } = usuario;
console.log(nome, idade, cidade);


// REST e SPREAD
// REST
var usuario = {
    nome: 'alande',
    idade: 30,
    cidade: 'recife'
}

var { nome, ...resto } = usuario;
console.log(nome, resto);

var arr = [1,2,3,4,5];
var [ a,b, ...c] = arr;
console.log(a,b,c);

// function soma(a, b) {
//     return a+b;
// }

// function soma(a, b, c) {
//     return a+b+c;
// }

function soma(...params) {
    return params.reduce((sum, next) => sum+next);
}
console.log(soma(1,2,3,4,5))


// SPREAD
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

var usuario = {
    nome: 'alande',
    idade: 30,
    cidade: 'recife'
}

var usuario2 = { ...usuario, nome: 'Alande Amorim' };
console.log(usuario2);
