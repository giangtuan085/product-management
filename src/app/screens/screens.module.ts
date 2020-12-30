import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ScreensRoutingModule } from './screens-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, ScreensRoutingModule, ShareModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ScreensModule {}
