interface Book {
    title: string;
    genre: 'fiction' | 'non-fiction' | 'educational';
    price: number;
}

const book: Book[] = [
    { title: "The Great Gatsby", genre: "fiction", price: 320},
    { title: "War and Peace", genre: "fiction", price: 250},
    { title: "Ecocomics 101", genre: "educational", price: 480},
    { title: "In Cold Blood", genre: "non-fiction", price: 300},
    { title: "The Catcher in the Rye", genre: "fiction", price: 400}
]

function filtercountProduct1(book:Book[],minPrices:number):Book[]{
    return book.filter(books=>books.price>minPrices && books.genre=='fiction');
}
function discountProduct1(book:Book[]):Book[]{
    return book.map(book=>({...book,price:book.price*0.9}));
}

let filterbook = filtercountProduct1(book,300);
let discountbook = discountProduct1(filterbook);

console.log(discountbook);