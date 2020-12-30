import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfig } from '../../../share/models/dialog-config';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogManagerService {

  constructor(
    private matDialog: MatDialog
  ) { }

  public async openDialog(title, message, alertType): Promise<any> {
    const config = new DialogConfig(title, message, alertType);
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, config);
    return await dialogRef.afterClosed().toPromise();
  }

}
