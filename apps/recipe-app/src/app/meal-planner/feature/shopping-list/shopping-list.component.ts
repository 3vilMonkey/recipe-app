import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShoppingListService } from '@meal-planner/data-access/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  imports: [CommonModule],
  templateUrl: './shopping-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent {
  shoppingListService = inject(ShoppingListService);
  shoppingList = this.shoppingListService.shoppingList;

  togglePurchased(itemName: string) {
    this.shoppingListService.togglePurchased(itemName);
  }
}
