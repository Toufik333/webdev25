const products = [
    { name: 'samsung s3', price: 1200, camera: 10, color: 'black' },
    { name: 'samsung s4', price: 1300, camera: 11, color: 'white' },
]

const addProduct = (name, price=0, camera, color) => [...products, { name, price, camera, color }]

const calculateTotal = (...prices) => prices.reduce((acc, price) => acc + price, 0);

// destructuring product details

const displayProductDetails = ({ name, price, camera, color }) => `Product Name: ${name}, Price: ${price}, Camera: ${camera}, Color: ${color}`;

const updateCart = addProduct('samsung s5', 1400, 12, 'blue');

console.log(updateCart);
//get total price

const totalPrice = calculateTotal(1200, 1300, 1400);
console.log(totalPrice);

//display product details
const productDetails = displayProductDetails(products[0]);
console.log(productDetails);