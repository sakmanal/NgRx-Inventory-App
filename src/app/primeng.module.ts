import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';

const modules = [
  MenubarModule,
  MenubarModule,
  InputTextModule,
  ButtonModule,
  CardModule,
  CheckboxModule
];

@NgModule({
  imports: [...modules ],
  exports: [...modules],
})
export class PrimeNgModule { }
