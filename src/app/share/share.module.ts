import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  providers: [],
})
export class ShareModule {}
