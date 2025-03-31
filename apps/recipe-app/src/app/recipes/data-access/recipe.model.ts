export interface Recipe {
  id: string; // Unique identifier
  name: string; // Recipe name
  description: string; // Brief description of the recipe
  ingredients: Ingredient[]; // List of ingredients
  steps: string[]; // Step-by-step instructions
  dietaryRestrictions?: DietaryRestriction[]; // Optional dietary tags
  preparationTime: number; // Time in minutes
  cookingTime: number; // Time in minutes
  totalServings: number; // Number of servings
  imageUrl?: string; // Optional URL to the recipe image
  imageAlt?: string; // Optional URL to the recipe image
}

export interface Ingredient {
  name: string; // Name of the ingredient
  quantity: number; // Quantity (e.g., '2')
  unit?: string; // Unit (e.g., 'cups')
}

export enum DietaryRestrictions {
  Vegetarian = 'Vegetarian',
  Vegan = 'Vegan',
  Gluten_Free = 'Gluten_Free',
  Dairy_Free = 'Dairy_Free',
  Nut_Free = 'Nut_Free',
}

export type DietaryRestriction = `${DietaryRestrictions}`;
