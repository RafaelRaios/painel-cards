import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { ClientInfosCardComponent } from './client-infos-card/client-infos-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';




@NgModule({
  declarations: [
    BalanceCardComponent,
    ClientInfosCardComponent,
    CreditCardComponent,
    DebitCardComponent,
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
