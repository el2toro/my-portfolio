import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-achievement-section',
  templateUrl: './achievement-section.component.html',
  styleUrls: ['./achievement-section.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class AchievementSectionComponent implements OnInit {

  achievements = [
    {
      title: 'MTA',
      year: '2022',
      description: 'Software Development Fundamentals'
    },
    {
      title: 'CDMT',
      year: '2022',
      description: 'Certified Developer for Microsoft Technologies'
    },
    {
      title: 'Microsoft Certified',
      year: '2020',
      description: 'Azure Fundamentals'
    },
    {
      title: 'CompTIA Security +',
      year: '2020',
      description: 'Cyber Security Certified'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
