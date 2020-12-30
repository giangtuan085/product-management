import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  providers: [],
})
export class CoreModule {}
