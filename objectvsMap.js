const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 2499,
    currency: "BDT",
    discount: 10,
    rating: 4.5,
    reviews: 120,
    image: "https://example.com/images/headphones.jpg",
    category: "Electronics",
    inStock: true,
    brand: "SoundMax"
  },
  {
    id: 2,
    title: "Men's Casual Sneakers",
    price: 1899,
    currency: "BDT",
    discount: 15,
    rating: 4.2,
    reviews: 85,
    image: "https://example.com/images/sneakers.jpg",
    category: "Fashion",
    inStock: true,
    brand: "UrbanWalk"
  },
  {
    id: 3,
    title: "Smart Watch Series 7",
    price: 5999,
    currency: "BDT",
    discount: 20,
    rating: 4.7,
    reviews: 230,
    image: "https://example.com/images/smartwatch.jpg",
    category: "Gadgets",
    inStock: false,
    brand: "TechPro"
  },
  {
    id: 4,
    title: "Laptop Backpack",
    price: 1299,
    currency: "BDT",
    discount: 5,
    rating: 4.3,
    reviews: 60,
    image: "https://example.com/images/backpack.jpg",
    category: "Accessories",
    inStock: true,
    brand: "CarryPro"
  },
  {
    id: 5,
    title: "Gaming Mouse RGB",
    price: 999,
    currency: "BDT",
    discount: 12,
    rating: 4.6,
    reviews: 150,
    image: "https://example.com/images/mouse.jpg",
    category: "Electronics",
    inStock: true,
    brand: "GameX"
  },
  {
    id: 6,
    title: "4K LED Monitor 27 inch",
    price: 18999,
    currency: "BDT",
    discount: 18,
    rating: 4.8,
    reviews: 95,
    image: "https://example.com/images/monitor.jpg",
    category: "Electronics",
    inStock: true,
    brand: "ViewTech"
  },
  {
    id: 7,
    title: "Women's Handbag",
    price: 1599,
    currency: "BDT",
    discount: 10,
    rating: 4.1,
    reviews: 70,
    image: "https://example.com/images/handbag.jpg",
    category: "Fashion",
    inStock: true,
    brand: "StyleBag"
  },
  {
    id: 8,
    title: "Bluetooth Speaker Portable",
    price: 1399,
    currency: "BDT",
    discount: 14,
    rating: 4.4,
    reviews: 110,
    image: "https://example.com/images/speaker.jpg",
    category: "Electronics",
    inStock: true,
    brand: "BeatBox"
  },
  {
    id: 9,
    title: "Fitness Tracker Band",
    price: 2199,
    currency: "BDT",
    discount: 16,
    rating: 4.3,
    reviews: 140,
    image: "https://example.com/images/fitness.jpg",
    category: "Gadgets",
    inStock: false,
    brand: "FitPro"
  },
  {
    id: 10,
    title: "Office Chair Ergonomic",
    price: 8999,
    currency: "BDT",
    discount: 22,
    rating: 4.7,
    reviews: 55,
    image: "https://example.com/images/chair.jpg",
    category: "Furniture",
    inStock: true,
    brand: "ComfortSeat"
  }
];

const topProducts = products.filter(
    (item) => item.category == "Electronics"
).sort((a, b)=> a.rating - b.rating )
.slice(0, 3)
.map(item => {
    return{ name: item.title };
});



 console.log(topProducts)