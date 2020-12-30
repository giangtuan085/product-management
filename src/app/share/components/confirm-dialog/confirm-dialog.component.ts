import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../models/dialog-config';

enum AlertType {
  Confirm = 'confirm',
  Info = 'info',
  Error = 'error',
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  dialogData: DialogData;
  alertType;
  confirmBtnColor: string;
  icon: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private ngZone: NgZone
  ) {
    this.alertType = AlertType;
    this.dialogData = data;
    this.filterAlertType();
  }

  ngOnInit(): void {}

  close(accept: boolean = true): void {
    this.dialogRef.close(accept);
    this.ngZone.run(() => {
      this.dialogRef.close(accept);
    });
  }

  private filterAlertType(): void {
    switch (this.dialogData.alertType) {
      case AlertType.Error:
        this.confirmBtnColor = 'warn';
        this.icon = 'assets/images/error.png';
        break;
      case AlertType.Confirm:
        this.confirmBtnColor = 'primary';
        this.icon = 'assets/images/info.png';
        break;
      default:
        this.confirmBtnColor = 'accent';
        this.icon = 'assets/images/success.png';
    }
  }
}
