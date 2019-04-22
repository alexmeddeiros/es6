// #### CLASSES E HERANÇAS
/*
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super(); //refere-se ao contructor PAI o da LIST

        this.user = "Alex Medeiros"; // Adicionando novas props ao contructor
    }

    mostraUser() {
        console.log(this.user);
    }
}

const MinhaLista = new TodoList(); //herança. Extends from List

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add("Novo Todo");
}

MinhaLista.mostraUser();
*/



// #### CONST $ LET ###
/*
const user = { nome: "Alex" };
user.nome = "Anthony"; // Uma CONST pode apenas MUTAR
console.log(user);
*/



// #### OPERAÇÕES EM ARRAY ###

const list = [1, 3, 4, 5, 6, 9];
/*
//O map percorre o vetor e faz o que esta determinado na função
const newList = list.map(function (item) {
    return item * 2;
});

// Usando o index do array como valor para o comando

const newList2 = list.map(function (item, index) {
    return item * index;
});

console.log(newList);
console.log(newList2);



//REDUNCE consume todo e vetor e retorna um variavel
const sum = list.reduce(function (total, next) {
    return total + next;
});
console.log(sum);


const filter = list.filter(function (itens) {
    return itens % 2 === 0;
});
console.log(filter);

const find = list.find(function (item) {
    return item === 4;
});
console.log(find);


// #### ARROW FUNCTIONS

const newList = list.map(function (item) {
    return item * 2;
});

// To =>
const newList = list.map((item) => {
    return item * 2;
});

// To =>
const newList = list.map(item => {
    return item * 2;
});

// To =>
//Quando a fnção nao retorna muitas expressoes, podemos melhorar ainda mais
*/
const newList = list.map(item => item * 2);
console.log(newList)