import { z } from 'zod';

export const ZodIngredient = z.object({
  name: z.string().describe('Name of the ingredient'),
  quantity: z.string().describe('Quantity and unit (e.g., 2 cups)'),
});

export const ZodDietaryRestrictions = z.enum([
  'Vegetarian',
  'Vegan',
  'Gluten',
  'Gluten_Free',
  'Dairy_Free',
  'Nut_Free',
]);
export type DietaryRestriction = z.infer<typeof ZodDietaryRestrictions>;

export const ZodRecipe = z.object({
  id: z.string().describe('Unique identifier'),
  name: z.string().describe('Recipe name'),
  description: z.string().describe('Brief description of the recipe'),
  ingredients: z.array(ZodIngredient).describe('List of ingredients'),
  steps: z.array(z.string()).describe('/ Step-by-step instructions'),
  dietaryRestrictions: z
    .array(ZodDietaryRestrictions)
    .describe('Optional dietary tags'),
  preparationTime: z.number(), // Time in minutes
  cookingTime: z.number(), // Time in minutes
  totalServings: z.number(), // Number of servings
  imageUrl: z.string().describe('Optional URL to the recipe image'),
  imageAlt: z.string().describe('Optional image alt text for the recipe image'),
});

export const ZodRecipeArray = z.array(ZodRecipe);

export type Recipe = z.infer<typeof ZodRecipe>;
export type Ingredient = z.infer<typeof ZodIngredient>;
