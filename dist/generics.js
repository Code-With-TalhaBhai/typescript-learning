class Person {
    name;
    city;
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
//type dataType = Person | Product;
class DataCollection {
    items = [];
    constructor(initialItems) {
        this.items.push(...initialItems);
    }
    add(newItem) {
        this.items.push(newItem);
    }
    // getNames(): string[] {
    //     return this.items.map(item => item.name);
    // }
    getItem(index) {
        return this.items[index];
    }
}
let peopleData = new DataCollection(people);
//console.log(`Names: ${peopleData.getNames().join(", ")}`);
let firstPerson = peopleData.getItem(0);
//if (firstPerson instanceof Person) {
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
//}
