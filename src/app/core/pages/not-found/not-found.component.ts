import { Component, NgModule, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class NotFoundComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
