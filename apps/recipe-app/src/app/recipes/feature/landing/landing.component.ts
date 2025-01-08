import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  Signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Recipe } from '../../data-access/recipe.model';
import { RecipeService } from '../../data-access/recipe.service';
import { RecipeListComponent } from '../../ui/recipe-list/recipe-list.component';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';

@Component({
  selector: 'app-landing',
  imports: [RecipeListComponent, SearchBarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  private destroyRef = inject(DestroyRef);
  private recipeService: RecipeService = inject(RecipeService);
  recipes: Signal<Recipe[]> = this.recipeService.recipes;

  ngOnInit(): void {
    this.getRecipes();
  }

  handleSearch(searchTerm: string) {
    this.recipeService
      .searchRecipes(searchTerm)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  getRecipes(): void {
    this.recipeService
      .getRecipes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  clearSearch() {
    this.getRecipes();
  }
}
