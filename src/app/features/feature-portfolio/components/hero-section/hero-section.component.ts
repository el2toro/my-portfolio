import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from './../../../../shared/components/popup-dialog/popup-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ChessBackgroundComponent } from '../chess-background/chess-background.component';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: true,
  imports: [MatIconModule, ChessBackgroundComponent]
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
