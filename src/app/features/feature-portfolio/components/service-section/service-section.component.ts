import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss']
})
export class ServiceSectionComponent implements OnInit {

  expertises = [
    {
      id: 1,
      title: 'Frontend development',
      description: 'Crafting user-friendly interfaces and interactive web experiences'
    },
    {
      id: 2,
      title: 'Backend development',
      description: 'Craftsman of web application cores, building secure and scalable server-side logic'
    },
    {
      id: 3,
      title: 'Mobile development',
      description: 'Engaging mobile applications for various platforms, ensuring a seamless user experience across different devices'
    },
    {
      id: 4,
      title: 'CI/CD',
      description: 'Automating processes, build infrastructure, and bridge the gap between development and operations'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
