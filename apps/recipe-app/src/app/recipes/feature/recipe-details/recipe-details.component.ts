import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../data-access/recipe.model';
import { RecipeService } from '../../data-access/recipe.service';

@Component({
  selector: 'app-recipe-details',
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailsComponent {
  private recipeService: RecipeService = inject(RecipeService);
  @Input('recipeId') id?: string;
  recipe$!: Observable<Recipe>;

  ngOnInit(): void {
    if (this.id) {
      this.recipe$ = this.recipeService.getRecipeById(this.id);
    }
  }
}
