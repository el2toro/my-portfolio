import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from './../../../../shared/components/popup-dialog/popup-dialog.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  downloadCv(){
    this.openDialog();
  }

  openDialog(): void {
    this.dialog.open(PopupDialogComponent, { data: 'Please contact me for the CV' });
  }
}
