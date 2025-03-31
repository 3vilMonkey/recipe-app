// app/recipes/data-access/recipe.service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  http = inject(HttpClient);
  readonly #apiUrl = '/api/recipes';

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.#apiUrl}/${id}`);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.#apiUrl);
  }

  getRecipeIds(): Observable<string[]> {
    return this.getRecipes().pipe(map((recipes): string[] => recipes.map((recipe) => recipe.id)));
  }
}
