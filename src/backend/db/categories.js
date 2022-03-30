import { v4 as uuid } from "uuid";
import cardImg1 from "./../assets/Products/shirt.png";
import cardImg2 from "./../assets/Products/casual-shirt-1.jpeg";
import cardImg3 from "./../assets/Products/formal-shirt-1.jpeg";
import cardImg4 from "./../assets/Products/half-shirt-2.jpeg";


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    id: uuid(),
    categoryName: "T-Shirts",
    description: "We have a great collection of T-shirts",
    offer: "We have winter offer of 70% off.",
    productImg: cardImg1,
    bedgeCss: "top-right badge red"
  },
  {
    id: uuid(),
    categoryName: "Casual Shirts",
    description: "We have a great collection of T-shirts",
    offer: "We have winter offer of 70% off.",
    productImg: cardImg2,
    bedgeCss: "top-right badge orange"
  },
  {
    id: uuid(),
    categoryName: "Formal Shirts",
    description: "We have a great collection of T-shirts",
    offer: "We have winter offer of 70% off.",
    productImg: cardImg3,
    bedgeCss: "top-right badge green"
  },
  {
    id: uuid(),
    categoryName: "Half Shirts",
    description: "We have a great collection of T-shirts",
    offer: "We have winter offer of 70% off.",
    productImg: cardImg4,
    bedgeCss: "top-right badge pink"
  }
];
