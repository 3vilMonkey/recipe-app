import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../data-access/recipe.model';

@Component({
  selector: 'app-recipe-card',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        breakpoints: [384, 640, 750],
      },
    },
  ],
})
export class RecipeCardComponent {
  recipe = input.required<Recipe>();
  hydrated = signal(false);

  constructor() {
    afterNextRender(() => {
      this.hydrated.set(true);
    });
  }
}
