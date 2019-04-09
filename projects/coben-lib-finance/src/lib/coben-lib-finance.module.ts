import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CobenLibCommonModule } from '@coben-lib/common';
import { TranslateModule } from '@ngx-translate/core';

import { CobenLibFinanceComponent } from './coben-lib-finance.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [CobenLibFinanceComponent, DetailsComponent],
  imports: [
    CobenLibCommonModule,
    TranslateModule.forChild(),
    RouterModule
  ],
  exports: [CobenLibFinanceComponent, DetailsComponent]
})
export class CobenLibFinanceModule { }
