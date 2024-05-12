import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { ClientInfosCardComponent } from './client-infos-card/client-infos-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardLineComponent } from './card-line/card-line.component';
import { CardHeaderComponent } from './card-header/card-header.component';




@NgModule({
  declarations: [
    BalanceCardComponent,
    ClientInfosCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    CardItemComponent,
    CardLineComponent,
    CardHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BalanceCardComponent,
    CreditCardComponent,
    ClientInfosCardComponent,
    DebitCardComponent,
  ]
})
export class ComponentsModuleModule { }
