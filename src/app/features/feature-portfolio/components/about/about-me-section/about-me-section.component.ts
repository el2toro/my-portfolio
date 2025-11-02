import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class AboutMeSectionComponent implements OnInit {

  skills = ['Backend Development', 'Frontend Development', 'Database', 'CI/CD'];

  constructor() { }

  ngOnInit() {
  }
}
