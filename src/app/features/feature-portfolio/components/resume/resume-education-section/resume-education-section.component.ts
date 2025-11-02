import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-education-section',
  templateUrl: './resume-education-section.component.html',
  styleUrls: ['./resume-education-section.component.scss'],
  standalone: true
})
export class ResumeEducationSectionComponent implements OnInit {

  educations = [
    {
      title: 'Microsoft Development',
      period: '2021 - 2022',
      description: ''
    },
    {
      title: 'System Administration',
      period: '2020 - 2021',
      description: ''
    },
    {
      title: 'Cyber and Network Security',
      period: '2019 - 2020',
      description: ''
    },
    {
      title: 'UTM',
      period: '2012 - 2015',
      description: ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
