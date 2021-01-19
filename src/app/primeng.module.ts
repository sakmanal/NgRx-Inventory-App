import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const modules = [
  MenubarModule,
  MenubarModule,
  InputTextModule,
  ButtonModule,
  CardModule,
  ProgressSpinnerModule
];

@NgModule({
  imports: [...modules ],
  exports: [...modules],
})
export class PrimeNgModule { }
