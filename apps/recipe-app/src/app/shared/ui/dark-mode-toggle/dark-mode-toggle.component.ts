import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeToggleComponent {}
