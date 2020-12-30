export class DialogConfig {
  disableClose: boolean;
  autoFocus: boolean;
  position: any;
  width: string;
  hasBackdrop: boolean;
  data: DialogData;
  constructor(
    title: string,
    content: string,
    alertType: string,
    cancelButton = 'Cancel',
    okButton = 'Ok'
  ) {
    this.disableClose = true;
    this.autoFocus = false;
    this.width = '550px';
    this.hasBackdrop = true;
    this.data = {
      title,
      content,
      alertType,
      cancelButton,
      okButton,
    };
  }
}

export interface DialogData {
  title: string;
  content: string;
  alertType: string;
  cancelButton: string;
  okButton: string;
}
