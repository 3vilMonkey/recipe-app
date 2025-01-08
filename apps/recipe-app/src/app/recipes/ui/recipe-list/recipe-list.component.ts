import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Recipe } from '../../data-access/recipe.model';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeCardComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent {
  recipes: InputSignal<Recipe[]> = input.required();
}
