import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeDetailStore } from '@recipes/data-access/recipe-detail.store';

@Component({
  selector: 'app-recipe-details',
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailsComponent {
  #recipeStore: RecipeDetailStore = inject(RecipeDetailStore);
  recipeId = input.required<string>();
  recipe = this.#recipeStore.recipe;

  constructor() {
    effect(() => {
      this.#recipeStore.load(this.recipeId());
    });
  }
}
