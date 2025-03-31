import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MealPlannerService } from '@meal-planner/data-access/meal-planner.service';
import { RecipeService } from '@recipes/data-access/recipe.service';

@Component({
  selector: 'app-meal-planner',
  imports: [CommonModule],
  templateUrl: './meal-planner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealPlannerComponent {
  private mealPlannerService = inject(MealPlannerService);
  private recipeService = inject(RecipeService);
  mealPlan = this.mealPlannerService.mealPlan;
  recipes = this.recipeService.recipes;

  createMealPlan() {
    this.mealPlannerService.createMealPlan(new Date());
  }

  addRecipeToDay(day: string, recipeId: string) {
    this.mealPlannerService.addRecipeToDay(day, recipeId);
  }
}
