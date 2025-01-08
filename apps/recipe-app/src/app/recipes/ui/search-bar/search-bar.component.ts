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
  search = output<string>();
  clear = output<void>();
  searchTerm = '';

  handleSearch() {
    this.search.emit(this.searchTerm);
  }

  onClear() {
    this.searchTerm = '';
    this.clear.emit();
  }
}
