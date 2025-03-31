import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeStore {
  #recipeService = inject(RecipeService);
  #recipeName = signal('');

  #recipeResource = resource({
    loader: () => firstValueFrom(this.#recipeService.getRecipes()),
  });

  readonly loading = computed(() => this.#recipeResource.isLoading());

  readonly recipes = computed(() => {
    if (this.#recipeResource.value()) {
      return this.#recipeResource
        .value()!
        .filter((recipe) => recipe.name.toLowerCase().includes(this.#recipeName().toLowerCase()));
    }
    return [];
  });

  searchRecipes(prompt: string): void {
    this.#recipeName.set(prompt);
  }
}
