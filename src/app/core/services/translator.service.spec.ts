import { TestBed } from '@angular/core/testing';

import { TranslatorService } from './translator.service';
import { TranslateService, TranslateStore, TranslateLoader, TranslateCompiler, TranslateParser, MissingTranslationHandler, USE_DEFAULT_LANG } from '@ngx-translate/core';


describe('TranslatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TranslateService,
      TranslateStore,
      TranslateLoader,
      TranslateCompiler,
      TranslateParser,
      MissingTranslationHandler,
    ]
  }));

  it('should be created', () => {
    const service: TranslatorService = TestBed.get(TranslatorService);
    expect(service).toBeTruthy();
  });
});
