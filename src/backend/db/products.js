import { v4 as uuid } from "uuid";
import img1 from "./../assets/Products/casual-shirt-1.jpeg";
import img2 from "./../assets/Products/casual-shirt-2.jpeg";
import img3 from "./../assets/Products/formal-shirt-1.jpeg";
import img4 from "./../assets/Products/formal-shirt-2.jpg";
import img5 from "./../assets/Products/dress-shirt-1.jpg";
import img6 from "./../assets/Products/half-shirt-1.jpg";
import img7 from "./../assets/Products/half-shirt-2.jpeg";
import img8 from "./../assets/Products/shirt.png";
import img9 from "./../assets/Products/formal-shirt-1.jpeg";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   _id: uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   _id: uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },

  {
    _id: uuid(),
    productName: "Casual Shirt",
    categoryName: "Casual",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "SINGLE",
    delivery: "FREE DELIVERY",
    productImg: `${img1}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "459",
    mainPrice: "1,199",
    off: "65% OFF",
    discount: "50",
    rating: "3.5",
    badgeCss: "top-left badge green"
  },
  {
    _id: uuid(),
    productName: "Casual Shirt",
    categoryName: "Casual",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "SINGLE",
    delivery: "FREE DELIVERY",
    productImg: `${img2}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: false,
    tericot: true,
    finalPrice: "689",
    mainPrice: "1,599",
    off: "56% OFF",
    discount: "50",
    rating: "4.5",
    badgeCss: "top-right badge red"
  },
  {
    _id: uuid(),
    productName: "Formal Shirt",
    categoryName: "Formal",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "5TH ANFOLD",
    delivery: "FREE DELIVERY",
    productImg: `${img3}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "4500",
    mainPrice: "7,199",
    off: "61% OFF",
    discount: "50",
    rating: "2.5",
    badgeCss: "top-right badge orange"
  },
  {
    _id: uuid(),
    productName: "Dress Shirt",
    categoryName: "Casual",
    description: "Men Slim Fit Solid Slim Collar Dress Shirt",
    vendorName: "CASUAL",
    delivery: "FREE DELIVERY",
    productImg: `${img4}`,
    material: "Granite",
    brand: "quo",
    inStock: false,
    fastDelivery: true,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: false,
    tericot: true,
    finalPrice: "799",
    mainPrice: "3,999",
    off: "60% OFF",
    discount: "50",
    rating: "3.0",
    badgeCss: "top-right badge grey"
  },
  {
    _id: uuid(),
    productName: "Branded Shirts",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "5TH ANFOLD",
    delivery: "FREE DELIVERY",
    productImg: `${img5}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "6000",
    mainPrice: "8,999",
    off: "61% OFF",
    discount: "50",
    rating: "4.5",
    categoryName: "formal",
    badgeCss: "top-right badge pink"
  },
  {
    _id: uuid(),
    productName: "Half Shirt",
    categoryName: "Half",
    description: "Men Regular Fit Checkered Ribbed Collar Half Shirt",
    vendorName: "CASUAL REYMONDI",
    delivery: "FREE DELIVERY",
    productImg: `${img6}`,
    material: "Granite",
    brand: "quo",
    inStock: false,
    fastDelivery: true,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: false,
    tericot: true,
    finalPrice: "6000",
    mainPrice: "9,999",
    off: "30% OFF",
    discount: "50",
    rating: "1.5",
    badgeCss: "top-right badge grey"
  },
  {
    _id: uuid(),
    productName: "Half Shirt",
    categoryName: "Half",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "CASUAL REYMONDI",
    delivery: "FREE DELIVERY",
    productImg: `${img7}`,
    material: "Granite",
    brand: "quo",
    inStock: false,
    fastDelivery: true,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "3000",
    mainPrice: "6,999",
    off: "50% OFF",
    discount: "50",
    rating: "2.5",
    badgeCss: "top-right badge blue"
  },

  {
    _id: uuid(),
    productName: "T-Shirt",
    categoryName: "T-Shirt",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "Veehaus",
    delivery: "FREE DELIVERY",
    productImg: `${img8}`,
    material: "Granite",
    brand: "quo",
    inStock: false,
    fastDelivery: true,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: false,
    tericot: true,
    finalPrice: "1500",
    mainPrice: "4,000",
    off: "70% OFF",
    discount: "50",
    rating: "4.5",
    badgeCss: "top-right badge pink"
  },
  {
    _id: uuid(),
    productName: "Formal Shirt",
    categoryName: "Formal",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "Veehaus",
    delivery: "FREE DELIVERY",
    productImg: `${img9}`,
    material: "Granite",
    brand: "quo",
    inStock: false,
    fastDelivery: true,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "3500",
    mainPrice: "4,000",
    off: "20% OFF",
    discount: "50",
    rating: "3.0",
    badgeCss: "top-right badge orange"
  },
  {
    _id: uuid(),
    productName: "Formal Shirt",
    categoryName: "Formal",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "Veehaus",
    delivery: "FREE DELIVERY",
    productImg: `${img9}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: true,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "3500",
    mainPrice: "4,000",
    off: "20% OFF",
    discount: "50",
    rating: "3.0",
    badgeCss: "top-right badge orange"
  },
  {
    _id: uuid(),
    productName: "Formal Shirt",
    categoryName: "Formal",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "Veehaus",
    delivery: "FREE DELIVERY",
    productImg: `${img9}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "3500",
    mainPrice: "4,000",
    off: "20% OFF",
    discount: "50",
    rating: "3.0",
    badgeCss: "top-right badge orange"
  },
  {
    _id: uuid(),
    productName: "Formal Shirt",
    categoryName: "Formal",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "Veehaus",
    delivery: "FREE DELIVERY",
    productImg: `${img9}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: true,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "3500",
    mainPrice: "4,000",
    off: "20% OFF",
    discount: "50",
    rating: "3.0",
    badgeCss: "top-right badge orange"
  },
  {
    _id: uuid(),
    productName: "Formal Shirt",
    categoryName: "Formal",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "Veehaus",
    delivery: "FREE DELIVERY",
    productImg: `${img9}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "3500",
    mainPrice: "4,000",
    off: "20% OFF",
    discount: "50",
    rating: "3.0",
    badgeCss: "top-right badge orange"
  },
  {
    _id: uuid(),
    productName: "Formal Shirt",
    categoryName: "Formal",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "Veehaus",
    delivery: "FREE DELIVERY",
    productImg: `${img9}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: false,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "3500",
    mainPrice: "4,000",
    off: "20% OFF",
    discount: "50",
    rating: "3.0",
    badgeCss: "top-right badge orange"
  },
  {
    _id: uuid(),
    productName: "Formal Shirt",
    categoryName: "Formal",
    description: "Men Regular Fit Printed Spread Collar Shirt",
    vendorName: "Veehaus",
    delivery: "FREE DELIVERY",
    productImg: `${img9}`,
    material: "Granite",
    brand: "quo",
    inStock: true,
    fastDelivery: true,
    ratings: 4,
    offer: "Save 50",
    idealFor: "Senior",
    level: "intermediate",
    color: "lime",
    cotton: true,
    tericot: false,
    finalPrice: "3500",
    mainPrice: "4,000",
    off: "20% OFF",
    discount: "50",
    rating: "3.0",
    badgeCss: "top-right badge orange"
  },

];
