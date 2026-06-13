export interface Product {
  id: string;
  name: string;
  category: "Burgers" | "Sides" | "Drinks" | "Desserts";
  price: number;
  description: string;
  tag: string;
  color: string;
}

export const products: Product[] = [
  {
    id: "signature-classic",
    name: "The Signature Classic",
    category: "Burgers",
    price: 14.5,
    description:
      "Smashed beef patty, 12-month aged cheddar, smoked chili aioli, heirloom tomato, crisp lettuce, house pickles, brioche bun.",
    tag: "Bestseller",
    color: "linear-gradient(135deg, #9A5A36, #5C2E18)",
  },
  {
    id: "double-stack",
    name: "Double Stack",
    category: "Burgers",
    price: 18.0,
    description:
      "Two smashed patties, double aged cheddar, smoked chili aioli, pickles, toasted brioche crown.",
    tag: "Most filling",
    color: "linear-gradient(135deg, #C99400, #5C2E18)",
  },
  {
    id: "ember-burger",
    name: "Ember Burger",
    category: "Burgers",
    price: 16.5,
    description:
      "Smashed patty, smoked gouda, charred jalapeño relish, ember sauce, crisp lettuce, brioche bun.",
    tag: "Spicy",
    color: "linear-gradient(135deg, #FF8A00, #C2570A)",
  },
  {
    id: "garden-stack",
    name: "Garden Stack",
    category: "Burgers",
    price: 13.0,
    description:
      "Grilled portobello, heirloom tomato, crisp lettuce, smoked chili aioli, aged cheddar, brioche bun.",
    tag: "Vegetarian",
    color: "linear-gradient(135deg, #8FBF5A, #4F7A2B)",
  },
  {
    id: "hand-cut-fries",
    name: "Hand-Cut Fries",
    category: "Sides",
    price: 5.5,
    description: "Twice-cooked for a crisp shell and a soft center, finished with sea salt.",
    tag: "Classic",
    color: "linear-gradient(135deg, #F2D06B, #B8860B)",
  },
  {
    id: "smoked-aioli-onion-rings",
    name: "Onion Rings & Smoked Aioli",
    category: "Sides",
    price: 6.5,
    description: "Beer-battered onion rings with our house smoked chili aioli for dipping.",
    tag: "Shareable",
    color: "linear-gradient(135deg, #FF8A00, #C2570A)",
  },
  {
    id: "house-pickles-side",
    name: "House Pickles",
    category: "Sides",
    price: 3.5,
    description: "Quick-brined in-house, sharp and bright. A great palate reset.",
    tag: "Light",
    color: "linear-gradient(135deg, #B8D24A, #6B8E23)",
  },
  {
    id: "craft-cola",
    name: "Craft Cola",
    category: "Drinks",
    price: 4.0,
    description: "Small-batch cola, brewed with real cane sugar and citrus oils.",
    tag: "Fizzy",
    color: "linear-gradient(135deg, #5C2E18, #2A1208)",
  },
  {
    id: "ginger-lemonade",
    name: "Ginger Lemonade",
    category: "Drinks",
    price: 4.5,
    description: "Fresh-pressed lemon, ginger syrup, and soda water.",
    tag: "Refreshing",
    color: "linear-gradient(135deg, #F2C94C, #C99400)",
  },
  {
    id: "vanilla-shake",
    name: "Vanilla Bean Shake",
    category: "Desserts",
    price: 6.0,
    description: "Madagascar vanilla bean, slow-churned and topped with whipped cream.",
    tag: "Creamy",
    color: "linear-gradient(135deg, #F2EBD9, #D9C9A3)",
  },
  {
    id: "chocolate-brownie",
    name: "Smoked Chocolate Brownie",
    category: "Desserts",
    price: 5.5,
    description: "Dense fudge brownie with a hint of smoked sea salt, served warm.",
    tag: "Rich",
    color: "linear-gradient(135deg, #5C2E18, #2A1208)",
  },
];

export const categories = ["All", "Burgers", "Sides", "Drinks", "Desserts"] as const;
