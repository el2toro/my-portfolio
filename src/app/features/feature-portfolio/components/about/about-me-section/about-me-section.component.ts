import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit {

  skills = ['Backend Development', 'Frontend Development', 'Database', 'CI/CD'];

  constructor() { }

  ngOnInit() {
  }
}
