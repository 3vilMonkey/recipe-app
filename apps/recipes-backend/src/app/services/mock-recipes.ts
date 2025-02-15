import { Recipe } from '../models/recipe.model';

export const TEST_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Classic Margherita Pizza',
    description: 'A simple and delicious pizza topped with fresh basil, mozzarella, and tomato sauce.',
    ingredients: [
      { name: 'Pizza Dough', quantity: '1 ball' },
      { name: 'Tomato Sauce', quantity: '1/2 cup' },
      { name: 'Fresh Mozzarella', quantity: '100g' },
      { name: 'Fresh Basil', quantity: '5 leaves' },
      { name: 'Olive Oil', quantity: '1 tbsp' },
    ],
    steps: [
      'Preheat the oven to 475°F (245°C).',
      'Roll out the pizza dough to your desired thickness.',
      'Spread the tomato sauce evenly over the dough.',
      'Add slices of fresh mozzarella and sprinkle with basil leaves.',
      'Drizzle with olive oil.',
      'Bake for 10-12 minutes or until the crust is golden and the cheese is bubbly.',
    ],
    dietaryRestrictions: ['Vegetarian'],
    preparationTime: 15,
    cookingTime: 12,
    totalServings: 2,
    imageUrl: 'static/images/margherita_pizza.webp',
    imageAlt: 'A visually appealing, modern, high-quality image of a classic Margherita Pizza. The pizza is topped with melted mozzarella cheese, fresh basil leaves'
  },
  {
    id: '2',
    name: 'Vegan Buddha Bowl',
    description: 'A nutritious bowl filled with quinoa, roasted vegetables, and a tangy tahini dressing.',
    ingredients: [
      { name: 'Quinoa', quantity: '1 cup' },
      { name: 'Sweet Potatoes', quantity: '2 medium' },
      { name: 'Chickpeas', quantity: '1 can' },
      { name: 'Spinach', quantity: '2 cups' },
      { name: 'Tahini', quantity: '3 tbsp' },
      { name: 'Lemon Juice', quantity: '1 tbsp' },
    ],
    steps: [
      'Cook quinoa according to package instructions.',
      'Roast sweet potatoes and chickpeas in the oven at 400°F (200°C) for 20 minutes.',
      'Assemble the bowl by adding quinoa, roasted vegetables, and spinach.',
      'Mix tahini with lemon juice and drizzle over the bowl.',
    ],
    dietaryRestrictions: ['Vegan', 'Gluten_Free'],
    preparationTime: 20,
    cookingTime: 20,
    totalServings: 2,
    imageUrl: 'static/images/buddha_bowl.webp',
    imageAlt: 'A beautifully arranged, modern, high-quality image of a Vegan Buddha Bowl. The bowl includes colorful fresh ingredients such as quinoa, roasted sweet potato.'
  },
  {
    id: '3',
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    ingredients: [
      { name: 'Spaghetti', quantity: '400g' },
      { name: 'Eggs', quantity: '4 large' },
      { name: 'Parmesan Cheese', quantity: '1 cup, grated' },
      { name: 'Pancetta', quantity: '150g' },
      { name: 'Black Pepper', quantity: 'to taste' },
      { name: 'Salt', quantity: 'to taste' },
    ],
    steps: [
      'Cook spaghetti in salted boiling water until al dente.',
      'In a bowl, whisk together eggs and grated Parmesan cheese.',
      'Fry pancetta in a pan until crispy.',
      'Mix the cooked spaghetti with the pancetta and remove from heat.',
      'Quickly add the egg and cheese mixture, stirring constantly to coat the pasta.',
      'Serve immediately with freshly ground black pepper.',
    ],
    dietaryRestrictions: [],
    preparationTime: 10,
    cookingTime: 15,
    totalServings: 4,
    imageUrl: 'static/images/spaghetti_carbonara.webp',
    imageAlt: 'A high-quality, inviting image of a plate of classic Spaghetti Carbonara. The spaghetti is coated in a creamy sauce, topped with crispy pancetta'
  },
];
