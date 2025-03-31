import { Injectable, signal } from '@angular/core';
import { MealPlan } from './meal-plan.model';

@Injectable({
  providedIn: 'root',
})
export class MealPlannerService {
  mealPlan = signal<MealPlan | null>(null);

  createMealPlan(startDate: Date) {
    const newMealPlan: MealPlan = {
      id: crypto.randomUUID(),
      weekStartDate: startDate,
      meals: [
        { day: 'Monday', recipeId: null },
        { day: 'Tuesday', recipeId: null },
        { day: 'Wednesday', recipeId: null },
        { day: 'Thursday', recipeId: null },
        { day: 'Friday', recipeId: null },
        { day: 'Saturday', recipeId: null },
        { day: 'Sunday', recipeId: null },
      ],
    };
    this.mealPlan.set(newMealPlan);
  }

  addRecipeToDay(day: string, recipeId: string) {
    if (!this.mealPlan()) return;
    this.mealPlan.update((plan) => ({
      ...plan!,
      meals: plan!.meals.map((meal) => (meal.day === day ? { ...meal, recipeId } : meal)),
    }));
  }
}
