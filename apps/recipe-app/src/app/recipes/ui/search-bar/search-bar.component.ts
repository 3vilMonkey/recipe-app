import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  onSearch = output<string>();
  onClear = output<void>();
  searchTerm = '';

  handleSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (value && value.trim().length > 0) {
      this.onSearch.emit(this.searchTerm);
    } else {
      this.searchTerm = '';
      this.onClear.emit();
    }
  }
}
