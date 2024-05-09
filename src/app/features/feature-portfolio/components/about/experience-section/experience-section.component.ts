import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {

  experiences = [
    {
      title: 'FullStack Developer',
      period: '2022 - Present',
      description: 'Developing applications. Building microservices for diferent domains like finance, logistic, hr.'
    },
    {
      title: '.NET Developer',
      period: '2021 - 2022',
      description: 'Testing, maintaning and developing new features for applications'
    },
    {
      title: 'System Administrator',
      period: '2020 - 2021',
      description: 'Resources creation, mobile devices, acces and logs management. Generation of reports.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
