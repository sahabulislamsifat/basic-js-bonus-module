const numbers = [12, 32, 65, 89, 75, 90, 1000, 2000, 3000];

// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(numbers[i]);
//   const number = numbers[i];
//   console.log(number);
// }

// for (const number of numbers) {
//   console.log(number);
// }

const products = [
  { id: 1, name: "Walton phone", price: 32000 },
  { id: 2, name: "Xiomi phone Note 7", price: 32000 },
  { id: 3, name: "Laptop", price: 32000 },
  { id: 4, name: "Dell Laptop", price: 32000 },
  { id: 5, name: "Mac Air Laptop 2", price: 32000 },
  { id: 6, name: "Samsung phone s24", price: 32000 },
  { id: 7, name: "Motorola phone g52", price: 32000 },
  { id: 8, name: "Lenovo Laptop", price: 32000 },
  { id: 9, name: "Tablet", price: 32000 },
  { id: 10, name: "Tablet Air", price: 32000 },
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

// const result = matchedProducts(products, "phone");
const result = matchedProducts(products, "Phone");
// const result = matchedProducts(products, "laptop");
console.log(result);
