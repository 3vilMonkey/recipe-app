import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DarkModeToggleComponent } from '../dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'app-header',
  imports: [DarkModeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
