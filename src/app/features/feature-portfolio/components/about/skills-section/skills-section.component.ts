import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
  standalone: true
})
export class SkillsSectionComponent implements OnInit {

  skills = [
    {
      title: '.NET',
      level: '95%'
    },
    {
      title: 'C#',
      level: '95%'
    },
    {
      title: 'Angular',
      level: '95%'
    },
    {
      title: 'TypeScript',
      level: '95%'
    },
    {
      title: 'EntityFramework',
      level: '95%'
    },
    {
      title: 'SQL Server',
      level: '95%'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
