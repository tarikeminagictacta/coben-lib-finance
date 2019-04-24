import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

export const TRANSLATIONS: any = {
  en: {
    super: {
      secret: 'don\'t tell anyone this'
    }
  }
};

export class FinanceTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    console.log(lang);
    return of(TRANSLATIONS[lang]);
  }
}
