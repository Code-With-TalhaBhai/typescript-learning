"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.City = exports.Product = exports.Person = void 0;
class Generics {
    name;
    price;
    qty;
    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    ;
    getProduct() {
        console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${this.qty}"`);
        let obj = { name: this.name, price: this.price, qty: this.qty };
        return [obj];
    }
}
;
class GenericObj {
    obj;
    constructor(obj) {
        this.obj = obj;
    }
    getProduct() {
        console.log(`The name of Product is "${this.obj.name}" and its price is "${this.obj.price}" and its quantities are "${this.obj.qty}"`);
        let object = { name: this.obj.name, price: this.obj.price, qty: this.obj.qty };
        return [object];
    }
}
;
const gen = new Generics('Ipod', 32234, 42);
console.log(gen.getProduct());
const genObj = new GenericObj({ name: 'Tablet', price: 234, qty: 54 });
console.log(genObj.getProduct());
class Pro {
    name;
    price;
    qty;
    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}
class GenerObj {
    obj;
    constructor(obj) {
        this.obj = obj;
    }
    getProduct() {
        // console.log(`The name of Product is "${this.obj.name}" and its price is "${this.obj.price}" and its quantities are "${this.obj.qty}"`)
        console.log(`The name of Product is "${this.obj}"`);
        // let object = {name:this.obj.name,price:this.obj.price,qty:this.obj.qty}
        // return [object];
    }
}
;
const fjObj = new GenerObj({ name: 'jfkdsl', price: 324, qty: 234 });
const fjfObj = new GenerObj({ name: 'jfkdsl', price: 324, qty: 234 });
const ffObj = new GenerObj({ name: 'jfkdsl', price: 324, qty: 234, werui: 'fjdskfs', priwe: 234234 });
fjObj.getProduct();
class GenObj {
    name;
    price;
    qty;
    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    getProduct() {
        console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${typeof (this.qty)}" "${this.qty}"`);
    }
}
;
const generObj = new GenObj('Tablet', 234, '54');
generObj.getProduct();
class GenFunObj {
    obj;
    constructor(obj) {
        this.obj = obj;
    }
    getProduct() {
        // console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${typeof(this.qty)}" "${this.qty}"`)
        console.log(`The name of Product is "${this.obj.qty}"`);
    }
}
;
const glksd = new GenFunObj({ name: 'jfkdsl', price: 324, qty: 'fdskl' });
glksd.getProduct();
class Person {
    name;
    city;
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}
exports.Person = Person;
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class City {
    name;
    population;
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
}
exports.City = City;
class Employee {
    name;
    role;
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
exports.Employee = Employee;
let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
    new Person("Sale", "Lahore")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000), new City("Lahore", 243242323)];
let employees = [new Employee('talha', 'boss'), new Employee('Dora Peters', 'manager'), new Employee('anony', 'CTO')];
class DataCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
let peopleData = new DataCollection(people);
let collatedData = peopleData.collate(cities, "city", "name");
console.log(collatedData);
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
class JobCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    ;
    collect(targetData, firstProp, secondProp) {
        let result = [];
        this.items.forEach(item => {
            let match = targetData.find(f => f[firstProp] === item[secondProp]);
            if (match !== undefined) {
                result.push({ ...match, ...item });
            }
        });
        return result;
    }
}
;
// items.push({name:'jkflds'});
let JobData = new JobCollection(people);
console.log(JobData.collect(employees, 'name', 'name'));
class SearchedCollection extends JobCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    search(name) {
        return this.items.find(c => c.name === name);
    }
}
let searchClass = new SearchedCollection(people);
let searchedPerson = searchClass.search('Dora Peters');
if (searchedPerson !== undefined) {
    console.log(`The person name is ${searchedPerson.name} and he lives in ${searchedPerson.city}`);
}
class NewCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
}
const chCollection = new NewCollection([...people, ...products]);
// let filteredProducts = chCollection.filter<Product>();
// filteredProducts.forEach(p=>console.log(p.name,p.price))
