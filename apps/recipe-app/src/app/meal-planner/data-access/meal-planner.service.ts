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
        { day: 'Monday', recipeId: '' },
        { day: 'Tuesday', recipeId: '' },
        { day: 'Wednesday', recipeId: '' },
        { day: 'Thursday', recipeId: '' },
        { day: 'Friday', recipeId: '' },
        { day: 'Saturday', recipeId: '' },
        { day: 'Sunday', recipeId: '' },
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
