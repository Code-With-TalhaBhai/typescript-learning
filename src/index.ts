

console.clear();

console.log('Hello typescript');

interface Programmer {
    id: number;
    lang: string;
    level: string;
}

interface ProgrammerBio extends Programmer{
    name: string;
    age: number;
    subdetails(): void;
    next?(): void;
}

type  first =  {
    id: number;
    lang: string;
    level: string;
    details(): void;
}


interface subfirst {
    id: number;
    lang: string;
    level: string;
    name: string;
    age: number;
    subdetails(): void;
    // check: string;
}


class First implements first {
    readonly id: number;
    public lang: string;
    public level: string;

    constructor(id:number,lang:string,level:string){
        this.id = id;
        this.lang = lang;
        this.level = level;
    }

    details():void{
        console.log(`id: ${this.id}\nlang: ${this.lang} \nlevel: ${this.level}\n`)
        // return `id: ${this.id} \n lang: ${this.lang} \n level: ${this.level}`;
    };
}


const firstClass : first[] = [new First(234,"Typescript","Expert"), new First(432,"Java","Beginner")];


console.log(firstClass);

firstClass[0].id = 32423434;

console.log(firstClass);


class SubFirst extends First implements ProgrammerBio{
    name: string;
    age: number;
    constructor(id:number,lang:string,level:string,name:string,age:number){
        super(id,lang,level);
        this.name = name;
        this.age = age;
    }
    subdetails():void{
        console.log(`id:${this.id}\nlang:${this.lang}\nlevel:${this.level}\nname: ${this.name}\nage:${this.age}`)
    }
    next(): void {
        console.log('\n Next is working perfectly');
    }
}

const subClass = new SubFirst(23423,"python","intermediate","talha",23);

subClass.subdetails();


let subData = [new First(32,"Rust","Beginner"),new SubFirst(324,"Solana","Beginner","talha",234)];


subData.forEach(item=>{
    if(item instanceof SubFirst){
    item.subdetails();
    }
})



let x : ProgrammerBio[] = [new SubFirst(23423,"js","intermediate","mark",23),subClass];


x.forEach(item=>{

    console.log('\n')
    item.subdetails();
    console.log('\n')
    
    if(item.next){
        item.next();
    }
})
