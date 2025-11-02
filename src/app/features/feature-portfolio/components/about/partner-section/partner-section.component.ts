import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-partner-section',
  templateUrl: './partner-section.component.html',
  styleUrls: ['./partner-section.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class PartnerSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
