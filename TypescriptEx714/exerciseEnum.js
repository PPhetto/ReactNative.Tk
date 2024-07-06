var productstatus;
(function (productstatus) {
    productstatus["avable"] = "available";
    productstatus["ostock"] = "Out of Stock";
    productstatus["dctinud"] = "Discountinud";
})(productstatus || (productstatus = {}));
var products = [
    { name: "laptop", status: productstatus.avable, price: 1200 },
    { name: "smartphone", status: productstatus.ostock, price: 700 },
    { name: "tablet", status: productstatus.dctinud, price: 300 },
];
function displayproductdetails(productdetail) {
    products.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", Status: ").concat(product.status, ", Price: ").concat(product.price));
    });
}
displayproductdetails(products);
