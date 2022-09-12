

type genTypes = {
    name: string;
    price: number;
    qty: number;
}

type genStrTypes = {
    name: string;
    price: number;
    qty: string;
}



class Generics<T>{
    public name:string
    public price:number
    public qty: number

    constructor(name: string,price: number, qty:number){
        this.name = name;
        this.price = price;
        this.qty = qty;
    };

    getProduct(){
        console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${this.qty}"`)
        let obj = {name:this.name,price:this.price,qty:this.qty}
        return [obj];
    }
};


class GenericObj<T extends{name:string,price:number,qty:string}>{
    constructor(public obj:{name:string,price:number,qty:number}){}
    getProduct(){
        console.log(`The name of Product is "${this.obj.name}" and its price is "${this.obj.price}" and its quantities are "${this.obj.qty}"`)
        let object = {name:this.obj.name,price:this.obj.price,qty:this.obj.qty}
        return [object];
    }
};


const gen = new Generics('Ipod',32234,42);
console.log(gen.getProduct());



const genObj = new GenericObj({name:'Tablet',price:234,qty:54});
console.log(genObj.getProduct())


class Pro{
    constructor(public name:string, public price:number, public qty: number){}
}


class GenerObj<T  extends{name:string, price:number, qty: number}>{
    constructor(public obj:T){}
    getProduct(){
        // console.log(`The name of Product is "${this.obj.name}" and its price is "${this.obj.price}" and its quantities are "${this.obj.qty}"`)
        console.log(`The name of Product is "${this.obj}"`);
        // let object = {name:this.obj.name,price:this.obj.price,qty:this.obj.qty}
        // return [object];
    }
};


const fjObj = new GenerObj<{name:string,price:number,qty:number}>({name:'jfkdsl',price:324,qty:234});
const fjfObj = new GenerObj<Pro>({name:'jfkdsl',price:324,qty:234});
const ffObj = new GenerObj({name:'jfkdsl',price:324,qty:234,werui:'fjdskfs',priwe:234234});
fjObj.getProduct();


class GenObj<T,K,R>{
    constructor(public name:T, public price:K, public qty: R){}
    getProduct(){
        console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${typeof(this.qty)}" "${this.qty}"`)
    }
};




const generObj = new GenObj('Tablet',234,'54');
generObj.getProduct();



class GenFunObj<T extends {name:string,price:number,qty:string}>{
    constructor(public obj:T){}
    getProduct(){
        // console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${typeof(this.qty)}" "${this.qty}"`)
        console.log(`The name of Product is "${this.obj.qty}"`);
    }
};



const glksd = new GenFunObj({name:'jfkdsl',price:324,qty:'fdskl'});
glksd.getProduct();


export class Person {
    constructor(public name: string, public city: string) {}
}

export class Product {
    constructor(public name: string, public price: number) {}
}

export class City  {
    constructor(public name: string, public population: number) {}
}

export class Employee {
    constructor(public name: string, public role: string) {}
}



let people: Person[] = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"),
    new Person("Sale","Lahore")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000), new City("Lahore",243242323)];
let employees: Employee[] = [new Employee('talha','boss'), new Employee('Dora Peters','manager'), new Employee('anony','CTO')]
class DataCollection<T extends { name: string }, U> {
    private items: T[] = [];
    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }
    collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        let results: (T & U)[]  = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
let peopleData = new DataCollection<Person, City>(people);
let collatedData = peopleData.collate(cities, "city", "name");
console.log(collatedData);
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));




class JobCollection<T extends{name:string}>{
    protected items: T[] = [];
    constructor(initialItems: T[]){
        this.items.push(...initialItems);
    };

    collect<U>(targetData:U[],firstProp:string,secondProp:string):(T&U)[]{
        let result: (T&U)[] = [];

        this.items.forEach(item=>{
            let match = targetData.find(f=>f[firstProp] === item[secondProp]);
            if (match !== undefined){
                result.push({...match,...item});
            }
        })
        return result;
    }
};

// items.push({name:'jkflds'});

let JobData = new JobCollection<Person>(people);

console.log(JobData.collect(employees,'name','name'));




class SearchedCollection<E extends {name:string}> extends JobCollection<E>{
    constructor(initialItems: E[]){
        super(initialItems);
    }

    search(name:string): E | undefined{
        return  this.items.find(c=>c.name === name)
    }
}



let searchClass = new SearchedCollection<Person>(people);
let searchedPerson = searchClass.search('Dora Peters');


if(searchedPerson !== undefined){
    console.log(`The person name is ${searchedPerson.name} and he lives in ${searchedPerson.city}`)
}




class NewCollection<T>{
    protected items:T[] = [];

    constructor(initialItems:T[]){
        this.items.push(...initialItems);
    }

        // Predicate is a function for types as instanceof in classes
    // filter<V extends T>(Predicate:(target)=>target is V):V[]{
    // filter<V extends T>():V[]{
        // return this.items.filter(item=>item instanceof V) as V[];
        // return this.items.filter(item=>Predicate(item)) as V[];
    // }
}


const chCollection = new NewCollection<Person | Product>([...people,...products]);

// let filteredProducts = chCollection.filter<Product>();

// filteredProducts.forEach(p=>console.log(p.name,p.price))