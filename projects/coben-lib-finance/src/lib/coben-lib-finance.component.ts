import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TRANSLATIONS } from './finance-translations';

@Component({
  selector: 'cblibfs-coben-lib-finance',
  templateUrl: './coben-lib-finance.component.html',
  styleUrls: [ './coben-lib-finance.component.scss' ]
})
export class CobenLibFinanceComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setTranslation('en', TRANSLATIONS.en, true);
  }

  ngOnInit() {
  }
}
