import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultImagePipe } from './pipes/defaultImage.pipe';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
  declarations: [DefaultImagePipe, DarkModeToggleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultImagePipe,
    DarkModeToggleComponent
  ]
})
export class SharedModule { }
