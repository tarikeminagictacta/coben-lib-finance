import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CobenLibCommonModule } from '@coben-lib/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CobenLibFinanceComponent } from './coben-lib-finance.component';
import { DetailsComponent } from './details/details.component';
import { TRANSLATIONS } from './finance-translations';

@NgModule({
  declarations: [CobenLibFinanceComponent, DetailsComponent],
  imports: [CobenLibCommonModule, TranslateModule, RouterModule],
  exports: [CobenLibFinanceComponent, DetailsComponent]
})
export class CobenLibFinanceModule {
  constructor(private translateService: TranslateService) {
    console.log('Finance module ctor', translateService.instant('super.secret'));
    translateService.setTranslation('en', TRANSLATIONS.en, true);
    console.log('Finance module ctor', translateService.instant('super.secret'));
  }
}
