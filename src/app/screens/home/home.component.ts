import { Component, OnInit } from '@angular/core';
import { DialogManagerService } from 'src/app/share/services/dialog-manager/dialog-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialogManager: DialogManagerService) { }

  ngOnInit(): void {
  }

  public openDialog(): void {
    this.dialogManager.openDialog('Message', 'message', 'confirm');
  }

}
