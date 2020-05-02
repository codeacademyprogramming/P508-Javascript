// const fullInfo = function () {
//     return this.name;
// }

// let obj = new Object();
// obj.name = 'Name-1';
// obj.getInfo = function () {
//     return obj.name;
// };

// let obj2 = new Object();
// obj2.name = 'Name-2';
// obj2.getInfo = fullInfo;

/*
product.name = 'Samsung';
product.memory = '8gb';
product.color = 'white';

const _fullInfo = function (){
    return `name :${this.name}  memory : ${this.memory}  color : ${this.color}`
}

 */
function Product(name, memory, color, price) {
    // console.log(name, memory, color);
    this.name = name;
    this.memory = memory;
    this.color = color;
    this.price = price;

    this.fullInfo = function () {
        return `${this.name} (${this.memory}) ${this.color}`
    }
}

function printInfo() {
    let nameValue = document.querySelector('#name').value;
    let product1 = new Product(nameValue, '8gb', 'white', 200);
    
    document.querySelector('#monitor').innerHTML = product1.fullInfo();
}