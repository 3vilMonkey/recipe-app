import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RecipeStore } from '@recipes/data-access/recipe.store';
import { RecipeListComponent } from '../../ui/recipe-list/recipe-list.component';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';

@Component({
  selector: 'app-recipes',
  imports: [RecipeListComponent, SearchBarComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {
  #recipeStore = inject(RecipeStore);
  recipes = this.#recipeStore.recipes;

  handleSearch(searchTerm: string) {
    this.#recipeStore.searchRecipes(searchTerm);
  }

  clearSearch() {
    this.#recipeStore.searchRecipes('');
  }
}
