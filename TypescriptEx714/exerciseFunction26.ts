type product = {
    name: string;
    price: number;
    category: string;
}

let productss: product[] = [
    {name: 'laptop', price: 50000, category: 'Electronics'},
    {name: 'shirt', price: 1200, category: 'apparel'},
    {name: 'coffee maker', price: 2500, category: 'appliances'}
]

//--------------------------------------------------------------------------------------------
//original
//const highprice = productsss.filter(product => product.price < 5000);
//const hpricesell = highprice.map(product => 
    //({name: product.name, price: product.price * 0.9, category: product.category}));

//const hpricesell = highprice.map(product => 
    //({...product,price:product.price * 0.9}));

//let discountProductsss = hpricesell;
//const hpricesells = highprice.map(product => 'name:'+' '+product.name+' '+ product.price*0.9 + ' ' + product.category);

//console.log(filterPRoduct);
//--------------------------------------------------------------------------------------------

//code อาจารย์
function fillterProductByPrice(productss:product[],minPrice:number):product[]{
    return productss.filter(products=>products.price>minPrice);
}

function discountProduct(productss:product[]):product[]{
    return productss.map(product=>({...product,price:product.price * 0.9}));
}

let filterProduct = fillterProductByPrice(productss,2000);
let discountProducts = discountProduct(filterProduct);

console.log(discountProducts);