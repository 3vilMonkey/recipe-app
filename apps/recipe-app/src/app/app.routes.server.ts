import { inject } from '@angular/core';
import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import { firstValueFrom } from 'rxjs';
import { RecipeService } from './recipes/data-access/recipe.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'meal-planner',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'shopping-list',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'recipes',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'recipe/:recipeId',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    async getPrerenderParams() {
      const recipeService = inject(RecipeService);
      const ids = await firstValueFrom(recipeService.getRecipeIds());
      return ids.map((id) => ({ recipeId: id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
