import { NgModule } from '@angular/core';
import { CobenLibCommonModule } from '@coben-lib/common';

import { CobenLibFinanceComponent } from './coben-lib-finance.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CobenLibFinanceComponent, DetailsComponent],
  imports: [
    CobenLibCommonModule,
    RouterModule
  ],
  exports: [CobenLibFinanceComponent, DetailsComponent]
})
export class CobenLibFinanceModule { }
