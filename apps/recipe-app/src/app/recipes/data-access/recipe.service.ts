// app/recipes/data-access/recipe.service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  http = inject(HttpClient);
  private readonly apiUrl = '/api/recipes';
  public recipes = signal<Recipe[]>([]);

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.apiUrl)
      .pipe(tap((recipes) => this.recipes.set(recipes)));
  }

  searchRecipes(prompt: string): Observable<Recipe[]> {
    return this.http
      .post<Recipe[]>(`${this.apiUrl}/search`, { prompt })
      .pipe(tap((recipes) => this.recipes.set(recipes)));
  }
}
