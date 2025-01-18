import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<PopupDialogComponent>);
  readonly message = inject<string>(MAT_DIALOG_DATA);

  constructor() { }

  ngOnInit() {
  
  }
}
