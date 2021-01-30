import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultImagePipe } from './defaultImage.pipe';

@NgModule({
  declarations: [DefaultImagePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DefaultImagePipe
  ]
})
export class SharedModule { }
