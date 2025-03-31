import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MealPlannerService } from '@meal-planner/data-access/meal-planner.service';
import { RecipeStore } from '@recipes/data-access/recipe.store';

@Component({
  selector: 'app-meal-planner',
  imports: [FormsModule],
  templateUrl: './meal-planner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealPlannerComponent {
  #mealPlannerService = inject(MealPlannerService);
  #recipeStore = inject(RecipeStore);
  mealPlan = this.#mealPlannerService.mealPlan;
  recipes = this.#recipeStore.recipes;

  createMealPlan() {
    this.#mealPlannerService.createMealPlan(new Date());
  }

  addRecipeToDay(day: string, recipeId: string) {
    this.#mealPlannerService.addRecipeToDay(day, recipeId);
  }
}
