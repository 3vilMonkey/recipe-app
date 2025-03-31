import { Recipe } from '../models/recipe.model';

export const TEST_RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Classic Margherita Pizza',
    description: 'A simple and delicious pizza topped with fresh basil, mozzarella, and tomato sauce.',
    ingredients: [
      {
        name: 'Pizza Dough',
        quantity: 1,
        unit: 'ball',
      },
      {
        name: 'Tomato Sauce',
        quantity: 0.5,
        unit: 'cup',
      },
      {
        name: 'Fresh Mozzarella',
        quantity: 100,
        unit: 'g',
      },
      {
        name: 'Fresh Basil',
        quantity: 5,
        unit: 'leaves',
      },
      {
        name: 'Olive Oil',
        quantity: 1,
        unit: 'tbsp',
      },
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
    imageUrl: '/static/images/margherita_pizza.webp',
    imageAlt:
      'A visually appealing, modern, high-quality image of a classic Margherita Pizza. The pizza is topped with melted mozzarella cheese, fresh basil leaves',
  },
  {
    id: '2',
    name: 'Vegan Buddha Bowl',
    description: 'A nutritious bowl filled with quinoa, roasted vegetables, and a tangy tahini dressing.',
    ingredients: [
      {
        name: 'Quinoa',
        quantity: 1,
        unit: 'cup',
      },
      {
        name: 'Sweet Potatoes',
        quantity: 2,
        unit: 'medium',
      },
      {
        name: 'Chickpeas',
        quantity: 1,
        unit: 'can',
      },
      {
        name: 'Spinach',
        quantity: 2,
        unit: 'cups',
      },
      {
        name: 'Tahini',
        quantity: 3,
        unit: 'tbsp',
      },
      {
        name: 'Lemon Juice',
        quantity: 1,
        unit: 'tbsp',
      },
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
    imageUrl: '/static/images/buddha_bowl.webp',
    imageAlt:
      'A beautifully arranged, modern, high-quality image of a Vegan Buddha Bowl. The bowl includes colorful fresh ingredients such as quinoa, roasted sweet potato.',
  },
  {
    id: '3',
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    ingredients: [
      {
        name: 'Spaghetti',
        quantity: 400,
        unit: 'g',
      },
      {
        name: 'Eggs',
        quantity: 4,
        unit: 'large',
      },
      {
        name: 'Parmesan Cheese',
        quantity: 1,
        unit: 'cup, grated',
      },
      {
        name: 'Pancetta',
        quantity: 150,
        unit: 'g',
      },
      {
        name: 'Black Pepper',
        quantity: null,
        unit: 'to taste',
      },
      {
        name: 'Salt',
        quantity: null,
        unit: 'to taste',
      },
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
    imageUrl: '/static/images/spaghetti_carbonara.webp',
    imageAlt:
      'A high-quality, inviting image of a plate of classic Spaghetti Carbonara. The spaghetti is coated in a creamy sauce, topped with crispy pancetta',
  },
  {
    id: '4',
    name: 'Pancakes',
    description: 'A classic breakfast recipe.',
    ingredients: [
      {
        name: 'Eggs',
        quantity: 2,
        unit: '',
      },
      {
        name: 'Flour',
        quantity: 1,
        unit: 'cup',
      },
      {
        name: 'Milk',
        quantity: 1,
        unit: 'cup',
      },
    ],
    steps: ['Mix ingredients.', 'Cook on a griddle.'],
    imageUrl: '/static/images/pancakes.webp',
    imageAlt:
      'A high-quality, inviting image of a stack of fluffy pancakes topped with fresh berries, a pat of butter, and a drizzle of maple syrup.',
    dietaryRestrictions: [],
    cookingTime: 10,
    preparationTime: 5,
  },
  {
    id: '5',
    name: 'Vegan Salad',
    description: 'A healthy vegan salad.',
    ingredients: [
      {
        name: 'Lettuce',
        quantity: 1,
        unit: 'head',
      },
    ],
    steps: ['Chop and mix ingredients.'],
    imageUrl: '/static/images/vegan-salad.webp',
    imageAlt:
      'A beautifully styled, high-quality image of a fresh vegan salad in a bowl. The salad contains a mix of leafy greens, cherry tomatoes, cucumber slices',
    dietaryRestrictions: ['Vegan'],
    cookingTime: 5,
    preparationTime: 5,
  },
  {
    id: '6',
    name: 'Grilled Chicken Sandwich',
    description: 'A delicious grilled chicken sandwich with fresh lettuce and tomatoes.',
    ingredients: [
      {
        name: 'Chicken breast',
        quantity: 1,
        unit: '',
      },
      {
        name: 'Lettuce',
        quantity: 2,
        unit: 'leaves',
      },
      {
        name: 'Tomato',
        quantity: 2,
        unit: 'slices',
      },
      {
        name: 'Bread',
        quantity: 2,
        unit: 'slices',
      },
      {
        name: 'Mayonnaise',
        quantity: 1,
        unit: 'tbsp',
      },
    ],
    steps: [
      'Grill the chicken breast until fully cooked.',
      'Toast the bread slices.',
      'Assemble the sandwich with lettuce, tomato, and mayonnaise.',
    ],
    imageUrl: '/static/images/grilled-chicken-sandwich.webp',
    imageAlt:
      'A beautifully arranged, high-quality image of a grilled chicken sandwich with fresh lettuce, tomato slices, and mayonnaise, served between two toasted bread.',
    dietaryRestrictions: ['Gluten'],
    cookingTime: 15,
    preparationTime: 5,
  },
  {
    id: '7',
    name: 'Tomato Basil Soup',
    description: 'A creamy and flavorful tomato soup with fresh basil.',
    ingredients: [
      {
        name: 'Tomatoes',
        quantity: 4,
        unit: 'large',
      },
      {
        name: 'Basil leaves',
        quantity: 10,
        unit: '',
      },
      {
        name: 'Cream',
        quantity: 0.5,
        unit: 'cup',
      },
      {
        name: 'Garlic',
        quantity: 2,
        unit: 'cloves',
      },
      {
        name: 'Olive oil',
        quantity: 1,
        unit: 'tbsp',
      },
    ],
    steps: [
      'Sauté garlic in olive oil until fragrant.',
      'Add chopped tomatoes and cook until soft.',
      'Blend the mixture and strain to remove seeds and skin.',
      'Add cream and fresh basil, then simmer for 5 minutes.',
    ],
    imageUrl: '/static/images/tomato-basil-soup.webp',
    imageAlt:
      'A beautifully arranged, high-quality image of a bowl of creamy tomato basil soup. The soup is vibrant red-orange with a swirl of cream on top.',
    dietaryRestrictions: ['Vegetarian', 'Gluten_Free'],
    cookingTime: 20,
    preparationTime: 10,
  },
  {
    id: '8',
    name: 'Beef Stir Fry',
    description: 'A quick and easy beef stir fry with vegetables.',
    ingredients: [
      {
        name: 'Beef strips',
        quantity: 300,
        unit: 'g',
      },
      {
        name: 'Bell peppers',
        quantity: 2,
        unit: '',
      },
      {
        name: 'Soy sauce',
        quantity: 3,
        unit: 'tbsp',
      },
      {
        name: 'Garlic',
        quantity: 2,
        unit: 'cloves',
      },
      {
        name: 'Vegetable oil',
        quantity: 1,
        unit: 'tbsp',
      },
    ],
    steps: [
      'Heat oil in a wok and sauté garlic.',
      'Add beef strips and cook until browned.',
      'Add sliced bell peppers and stir fry for 5 minutes.',
      'Add soy sauce and cook for another 2 minutes.',
    ],
    imageUrl: '/static/images/beef-stir-fry.webp',
    imageAlt:
      'A high-quality, vibrant image of a sizzling beef stir fry served on a black plate. The dish features tender beef strips with colorful bell peppers',
    dietaryRestrictions: ['Dairy_Free'],
    cookingTime: 15,
    preparationTime: 5,
  },
  {
    id: '9',
    name: 'Berry Smoothie Bowl',
    description: 'A refreshing smoothie bowl topped with fresh berries and granola.',
    ingredients: [
      {
        name: 'Frozen mixed berries',
        quantity: 1,
        unit: 'cup',
      },
      {
        name: 'Banana',
        quantity: 1,
        unit: '',
      },
      {
        name: 'Almond milk',
        quantity: 0.5,
        unit: 'cup',
      },
      {
        name: 'Granola',
        quantity: 0.25,
        unit: 'cup',
      },
      {
        name: 'Chia seeds',
        quantity: 1,
        unit: 'tbsp',
      },
    ],
    steps: [
      'Blend frozen berries, banana, and almond milk until smooth.',
      'Pour into a bowl and top with granola, chia seeds, and fresh berries.',
    ],
    imageUrl: '/static/images/berry-smoothie-bowl.webp',
    imageAlt:
      'A beautifully styled, high-quality image of a vibrant berry smoothie bowl. The bowl contains a thick smoothie made from frozen mixed berries and banan.',
    dietaryRestrictions: ['Vegan', 'Gluten_Free'],
    cookingTime: 5,
    preparationTime: 5,
  },
  {
    id: '10',
    name: 'Stuffed Bell Peppers',
    description: 'Bell peppers stuffed with a flavorful rice and vegetable mixture.',
    ingredients: [
      {
        name: 'Bell peppers',
        quantity: 4,
        unit: '',
      },
      {
        name: 'Rice',
        quantity: 1,
        unit: 'cup',
      },
      {
        name: 'Onion',
        quantity: 1,
        unit: '',
      },
      {
        name: 'Tomato paste',
        quantity: 2,
        unit: 'tbsp',
      },
      {
        name: 'Cheese',
        quantity: 0.5,
        unit: 'cup',
      },
    ],
    steps: [
      'Cut the tops off the bell peppers and remove seeds.',
      'Cook rice and mix with sautéed onions, tomato paste, and seasoning.',
      'Stuff the mixture into the bell peppers and top with cheese.',
      'Bake at 180°C (350°F) for 25 minutes.',
    ],
    imageUrl: '/static/images/stuffed-bell-peppers.webp',
    imageAlt:
      'A high-quality, vibrant image of stuffed bell peppers served on a white plate. The bell peppers are filled with a colorful rice and vegetable mixture.',
    dietaryRestrictions: ['Vegetarian'],
    cookingTime: 25,
    preparationTime: 15,
  },
];
