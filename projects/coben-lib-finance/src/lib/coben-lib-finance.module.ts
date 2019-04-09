import { NgModule } from '@angular/core';
import { CobenLibCommonModule } from '@coben-lib/common';

import { CobenLibFinanceComponent } from './coben-lib-finance.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [CobenLibFinanceComponent, DetailsComponent],
  imports: [
    CobenLibCommonModule
  ],
  exports: [CobenLibFinanceComponent, DetailsComponent]
})
export class CobenLibFinanceModule { }
