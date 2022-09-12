import { Employee, Person, Product } from "./genconcept";

type shapeType = {name:string}

interface Collection<T extends shapeType>{
    add(...newItems:T[]): void;
    get(name:string): T;
    count(): number;
}


interface SearchableCollection<T extends shapeType> extends Collection<T>{
    find(name:string): T | undefined
}


interface productCollection extends Collection<Product>{
    sumPrices(): number;
}


interface PeopleCollection<T extends Product | Employee> extends Collection<T>{
    getname(): string
}



class genericInterfaceCollection<DataType extends shapeType> implements Collection<DataType>{
    protected items : DataType[] = [];

    add(...newItems): void{
        this.items.push(...newItems)
    };

    get(name:string):any{
        return this.items.find(item=>item.name === name);
    }

    count():number{
        return this.items.length;
    }
};



const ptanahikia = new genericInterfaceCollection<Person>();

ptanahikia.add(new Person('talha','bhai'),new Person('khizer','bro'));


console.log(ptanahikia.get('talha'));

console.log(ptanahikia.count());




// Restricting Items

class genericInterCollection implements Collection<Person>{
    protected items : Person[] = [];

    add(...newItems): void{
        this.items.push(...newItems)
    };

    get(name:string):Person{
        return this.items.find(item=>item.name === name) || {name:'fsdkl',city:'fjkds'};
        // return this.items.find(item=>item.name === name) || {name:'fkjds'};
    }

    count():number{
        return this.items.length;
    }
};



const ptanah = new genericInterCollection();

ptanah.add(new Person('talha','bhai'),new Person('khizer','bro'));


console.log(ptanah.get('talha'));

console.log(ptanah.count());





interface under<Y extends shapeType>{
    name: string;
    age(fdksl:Y): Y;
}


interface underwork<Z extends shapeType> extends under<Z>{
    work(): Z;
}


// const obj:underwork<{name:string,cake:string}> = {
const obj:underwork<{name:string,check:string}> = {
    name: 'fdsafasdf',
    age:(age)=>{
        return age; 
    },
    work:()=>{
        return {name: 'fdjskl',check:'choco'}
    }
}


console.log(obj);

console.log(obj.age({name:'fdsk',check:'sjfksdl'}));


