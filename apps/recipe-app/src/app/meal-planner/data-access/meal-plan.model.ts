export interface MealPlan {
  id: string;
  weekStartDate: Date;
  meals: {
    day: string;
    recipeId: string | null;
  }[];
}
