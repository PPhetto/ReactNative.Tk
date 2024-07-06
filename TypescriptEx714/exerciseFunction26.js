var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var productss = [
    { name: 'laptop', price: 50000, category: 'Electronics' },
    { name: 'shirt', price: 1200, category: 'apparel' },
    { name: 'coffee maker', price: 2500, category: 'appliances' }
];
//const highprice = productsss.filter(product => product.price < 5000);
//const hpricesell = highprice.map(product => 
//({name: product.name, price: product.price * 0.9, category: product.category}));
//const hpricesell = highprice.map(product => 
//({...product,price:product.price * 0.9}));
//let discountProductsss = hpricesell;
//const hpricesells = highprice.map(product => 'name:'+' '+product.name+' '+ product.price*0.9 + ' ' + product.category);
//code อาจารย์
function fillterProductByPrice(productss, minPrice) {
    return productss.filter(function (products) { return products.price > minPrice; });
}
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
var filterProduct = fillterProductByPrice(productss, 2000);
var discountProducts = discountProduct(filterProduct);
//console.log(filterPRoduct);
//end อาจารย์
console.log(discountProducts);
