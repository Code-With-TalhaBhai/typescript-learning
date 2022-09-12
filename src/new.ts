
type productTypes = {
    name: string;
    price: number;
    qty: number;
}

type protypes =  {
    name: string;
    price: number;
    quantity: string;
}

type proName = {
    name: string;
    price: number
}

interface ProDetail extends proName {
    qty: number
}



// class Products implements productTypes {
class Products implements protypes {
    name: string;
    price: number;
    quantity: string;

    constructor(name: string,price: number, qty: number){
        this.name = name;
        this.price = price;
        this.quantity = String(qty);
    };

    getProduct(){
        console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${this.quantity}"`)
    }
};


type prodType = protypes | productTypes; // Cannot use Union type in classes instead we use Generics.


class ProductUnion implements ProDetail{

    constructor(public name: string, public price: number, public qty: number){};

    getProduct(){
        console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${this.qty}"`)
    }
};


class ProductGenerics<T>{

    constructor(public name: string, public price: number, public qty:number){};

    getProduct(){
        console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${this.qty}"`)
    }
};


const allProducts = new Products("Macbook",2344,32);
allProducts.price += 500;
allProducts.getProduct();




const allproUnion = new ProductUnion('Iphone',324,432);
allproUnion.getProduct();




const allproGeneric = new ProductGenerics<productTypes | protypes>('Ipod',32234,42);
allproGeneric.getProduct();

