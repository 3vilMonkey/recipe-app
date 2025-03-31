import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeDetailStore {
  #recipeService = inject(RecipeService);
  #id = signal<string | undefined>(undefined);

  #recipeResource = resource({
    request: computed(() => ({ id: this.#id() })),
    loader: (param) => {
      const id = param.request.id;
      if (id) {
        return firstValueFrom(this.#recipeService.getRecipeById(id));
      }
      return Promise.resolve(null);
    },
  });

  readonly loading = this.#recipeResource.isLoading();
  readonly recipe = computed(() => this.#recipeResource.value() ?? null);
  readonly error = this.#recipeResource.error;

  load(id: string): void {
    this.#id.set(id);
  }
}
