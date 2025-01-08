import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'recipes',
    loadComponent: () =>
      import('./recipes/feature/landing/landing.component').then(
        (m) => m.LandingComponent
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
