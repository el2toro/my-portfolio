import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-skills-section',
  templateUrl: './resume-skills-section.component.html',
  styleUrls: ['./resume-skills-section.component.scss']
})
export class ResumeSkillsSectionComponent implements OnInit {

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
