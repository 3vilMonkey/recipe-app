import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../data-access/recipe.model';

@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCardComponent {
  recipe = input.required<Recipe>()
}
