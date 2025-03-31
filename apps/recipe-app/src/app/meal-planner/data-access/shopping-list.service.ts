import { inject, Injectable, signal } from '@angular/core';
import { RecipeStore } from '@recipes/data-access/recipe.store';
import { MealPlannerService } from './meal-planner.service';
import { ShoppingList, ShoppingListItem } from './shopping-list.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  #mealPlannerService = inject(MealPlannerService);
  #recipeStore = inject(RecipeStore);

  shoppingList = signal<ShoppingList | null>(null);

  generateShoppingList() {
    const mealPlan = this.#mealPlannerService.mealPlan();
    if (!mealPlan) return;

    const ingredientsMap: Record<string, ShoppingListItem> = {};

    mealPlan.meals.forEach((meal) => {
      if (!meal.recipeId) return;
      const recipe = this.#recipeStore.recipes().find((recipe) => recipe.id === meal.recipeId)!;
      recipe.ingredients.forEach((ingredient) => {
        if (ingredientsMap[ingredient.name]) {
          ingredientsMap[ingredient.name].quantity += ingredient.quantity;
        } else {
          ingredientsMap[ingredient.name] = {
            name: ingredient.name,
            quantity: ingredient.quantity,
            unit: ingredient.unit,
            purchased: false,
          };
        }
      });
    });

    this.shoppingList.set({
      id: crypto.randomUUID(),
      items: Object.values(ingredientsMap),
    });
  }

  togglePurchased(itemName: string) {
    this.shoppingList.update((list) => {
      if (!list) return list;
      return {
        ...list,
        items: list.items
          .map((item) => (item.name === itemName ? { ...item, purchased: !item.purchased } : item))
          .sort((a) => (a.purchased ? 0 : -1)),
      };
    });
  }
}
