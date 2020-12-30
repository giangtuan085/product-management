import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguageConst } from '../../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _currentLanguage: string;
  private _translated: any;

  constructor(private translate: TranslateService) {
    translate.addLangs(LanguageConst.LANGUAGE_LIST);

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(LanguageConst.DEFAULT_LANG);

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.getLang();

    // listen to language change event
    this.updateLanguageOnChange();
  }

  public get currentLanguage(): string {
    return this._currentLanguage;
  }

  public get translated(): any {
    return this._translated;
  }

  public set translated(translation) {
    this._translated = translation;
  }

  public instant(key: string): string | any {
    return this.translate.instant(key);
  }

  private getLang(): void {
    this._currentLanguage = localStorage.getItem('lang');
    if (this._currentLanguage) {
      this.translate.use(this._currentLanguage);
    } else {
      localStorage.setItem('lang', LanguageConst.DEFAULT_LANG);
      this._currentLanguage = LanguageConst.DEFAULT_LANG;
    }
  }

  private updateLanguageOnChange(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang !== this._currentLanguage) {
        localStorage.setItem('lang', event.lang);
        window.location.reload();
      }
    });
  }
}
