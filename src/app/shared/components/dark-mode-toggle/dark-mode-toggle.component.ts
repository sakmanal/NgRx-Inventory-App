import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Theme } from 'src/app/core/theme.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {

  @Input() theme: Theme;
  @Output() themeChange = new EventEmitter<Theme>();
  darkModeEnabled: boolean;

  constructor() { }

  ngOnInit(): void {
    this.darkModeEnabled = this.theme === Theme.dark;
  }

  changeTheme(event): void {
    this.darkModeEnabled = !this.darkModeEnabled;
    const mode = this.darkModeEnabled ? Theme.dark : Theme.light;
    this.themeChange.emit(mode);
  }

}
