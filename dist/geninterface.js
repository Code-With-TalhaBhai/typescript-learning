"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genconcept_1 = require("./genconcept");
class genericInterfaceCollection {
    items = [];
    add(...newItems) {
        this.items.push(...newItems);
    }
    ;
    get(name) {
        return this.items.find(item => item.name === name);
    }
    count() {
        return this.items.length;
    }
}
;
const ptanahikia = new genericInterfaceCollection();
ptanahikia.add(new genconcept_1.Person('talha', 'bhai'), new genconcept_1.Person('khizer', 'bro'));
console.log(ptanahikia.get('talha'));
console.log(ptanahikia.count());
const obj = {
    name: 'fdsafasdf',
    age: (age) => {
        return { name: age };
    }
};
console.log(obj);
console.log(obj.age(234));
