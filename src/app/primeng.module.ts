import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OrderListModule } from 'primeng/orderlist';
import { MessagesModule } from 'primeng/messages';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';

const modules = [
  MenubarModule,
  MenubarModule,
  InputTextModule,
  ButtonModule,
  CardModule,
  ProgressSpinnerModule,
  OrderListModule,
  MessagesModule,
  RatingModule,
  InputTextareaModule,
  ToastModule
];

@NgModule({
  imports: [...modules ],
  exports: [...modules],
})
export class PrimeNgModule { }
