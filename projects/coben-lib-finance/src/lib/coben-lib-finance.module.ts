import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CobenLibCommonModule } from '@coben-lib/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CobenLibFinanceComponent } from './coben-lib-finance.component';
import { DetailsComponent } from './details/details.component';
import { FinanceTranslateLoader } from './finance-translate.loader';


@NgModule({
  declarations: [CobenLibFinanceComponent, DetailsComponent],
  imports: [
    CobenLibCommonModule,
    TranslateModule.forChild({
      loader: { provide: TranslateLoader, useClass: FinanceTranslateLoader },
      isolate: true
    }),
    RouterModule
  ],
  exports: [CobenLibFinanceComponent, DetailsComponent]
})
export class CobenLibFinanceModule { }
