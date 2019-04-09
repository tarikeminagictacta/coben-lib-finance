import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CobenLibCommonModule } from '@coben-lib/common';

import { CobenLibFinanceComponent } from './coben-lib-finance.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [CobenLibFinanceComponent, DetailsComponent],
  imports: [
    CobenLibCommonModule,
    RouterModule.forChild([
      { path: '', component: CobenLibFinanceComponent, children: [
        { path: 'details', component: DetailsComponent }
      ] }
    ])
  ],
  exports: [CobenLibFinanceComponent, DetailsComponent]
})
export class CobenLibFinanceModule { }
