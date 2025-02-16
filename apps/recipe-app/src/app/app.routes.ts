import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'recipes',
    loadComponent: () =>
      import('./recipes/feature/recipes/recipes.component').then(
        (m) => m.RecipesComponent
      ),
  },
  {
    path: 'recipe/:recipeId',
    loadComponent: () =>
      import('./recipes/feature/recipe-details/recipe-details.component').then(
        (m) => m.RecipeDetailsComponent
      ),
  },
  {
    path: '*',
    redirectTo: 'recipes'
  },
];
