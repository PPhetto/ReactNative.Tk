enum productstatus {
  avable = "available",
  ostock = "Out of Stock",
  dctinud = "Discountinud",
}

let products: any[] = [
  { name: "laptop", status: productstatus.avable, price: 1200 },
  { name: "smartphone", status: productstatus.ostock, price: 700 },
  { name: "tablet", status: productstatus.dctinud, price: 300 },
];

function displayproductdetails(productdetail: any[]) {
  products.forEach((product) => {
    console.log(
      `Product: ${product.name}, Status: ${product.status}, Price: ${product.price}`
    );
  });
}

displayproductdetails(products);
