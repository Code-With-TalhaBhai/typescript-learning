console.clear();
console.log('Hello typescript');
class First {
    id;
    lang;
    level;
    constructor(id, lang, level) {
        this.id = id;
        this.lang = lang;
        this.level = level;
    }
    details() {
        console.log(`id: ${this.id}\nlang: ${this.lang} \nlevel: ${this.level}\n`);
        // return `id: ${this.id} \n lang: ${this.lang} \n level: ${this.level}`;
    }
    ;
}
const firstClass = [new First(234, "Typescript", "Expert"), new First(432, "Java", "Beginner")];
console.log(firstClass);
firstClass[0].id = 32423434;
console.log(firstClass);
class SubFirst extends First {
    name;
    age;
    constructor(id, lang, level, name, age) {
        super(id, lang, level);
        this.name = name;
        this.age = age;
    }
    subdetails() {
        console.log(`id:${this.id}\nlang:${this.lang}\nlevel:${this.level}\nname: ${this.name}\nage:${this.age}`);
    }
    next() {
        console.log('\n Next is working perfectly');
    }
}
const subClass = new SubFirst(23423, "python", "intermediate", "talha", 23);
subClass.subdetails();
let subData = [new First(32, "Rust", "Beginner"), new SubFirst(324, "Solana", "Beginner", "talha", 234)];
subData.forEach(item => {
    if (item instanceof SubFirst) {
        item.subdetails();
    }
});
let x = [new SubFirst(23423, "js", "intermediate", "mark", 23), subClass];
x.forEach(item => {
    console.log('\n');
    item.subdetails();
    console.log('\n');
    if (item.next) {
        item.next();
    }
});
