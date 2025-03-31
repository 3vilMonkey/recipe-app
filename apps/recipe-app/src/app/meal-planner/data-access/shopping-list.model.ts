export interface ShoppingListItem {
  name: string;
  quantity: number;
  unit?: string;
  purchased: boolean;
}

export interface ShoppingList {
  id: string;
  items: ShoppingListItem[];
}
