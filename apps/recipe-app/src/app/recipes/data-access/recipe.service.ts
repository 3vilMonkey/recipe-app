// app/recipes/data-access/recipe.service.ts

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
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
    return this.http.get<Recipe[]>(this.apiUrl).pipe(tap((recipes) => this.recipes.set(recipes)));
  }

  searchRecipes(prompt: string): Recipe[] {
    return this.recipes().filter((recipe) => recipe.name.toLowerCase().includes(prompt.toLowerCase()));
  }

  getRecipeIds(): Observable<string[]> {
    return this.getRecipes().pipe(map((recipes): string[] => recipes.map((recipe) => recipe.id)));
  }
}
