// class Products implements productTypes {
class Products {
    name;
    price;
    quantity;
    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.quantity = String(qty);
    }
    ;
    getProduct() {
        console.log(`The name of Product is "${this.name}" and its price is "${this.price}" and its quantities are "${this.quantity}"`);
    }
}
;
class ProductUnion {
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
    }
}
;
class ProductGenerics {
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
    }
}
;
const allProducts = new Products("Macbook", 2344, 32);
allProducts.price += 500;
allProducts.getProduct();
const allproUnion = new ProductUnion('Iphone', 324, 432);
allproUnion.getProduct();
const allproGeneric = new ProductGenerics('Ipod', 32234, 42);
allproGeneric.getProduct();
