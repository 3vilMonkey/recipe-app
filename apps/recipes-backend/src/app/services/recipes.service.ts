import { Recipe } from '../models/recipe.model';
import { TEST_RECIPES } from './mock-recipes';

export class RecipesService {
  private recipes: Recipe[] = TEST_RECIPES;

  getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipeById(id: string): Recipe | undefined {
    return this.recipes.find((recipe) => recipe.id === id);
  }
}
