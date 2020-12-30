import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'product-management';
  constructor(
    private language: LanguageService,
    private translate: TranslateService
  ) {
    // get translation
    translate.get('TRANSLATE').subscribe((translation) => {
      language.translated = translation;
    });
  }
}
