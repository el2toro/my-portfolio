import { Component, OnInit } from '@angular/core';
import { PortfolioWorkModel } from '../../models/portfolio-work.model';
import * as  portfolioWork from '../../data/portfolio-work.json';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  sectionName = 'aboutme';
  sections = [ 'VIEW ALL', 'CREATIVE', 'DEVELOPMENT', 'BRANDING', 'WEB DESIGN'];

  sectionNameMobile = 'VIEW ALL';
  index = 0;
  data: PortfolioWorkModel[] = [];

  constructor() { }

  ngOnInit() {
    this.initData()
  }

  nextSection(){
    if(this.index === this.sections.length - 1) { return; }
    this.index += 1; 
    this.loadSection()
  }

  previuosSection(){
    if(this.index === 0) { return; }
    this.index -= 1;
    this.loadSection()
  }

  loadSection(){

    if(this.index === 0){
      return this.data;
    }
    return this.data.filter(work => work.section === this.index.toString());
  }

  initData(){
    this.data = [
      {
          "title": "Boutique Web Design",
          "subtitle": "Web Development",
          "image": "assets/images/work-1.jpg",
          "section": "1"
      },
      {
          "title": "Company Landing Page",
          "subtitle": "Web Development",
          "image": "assets/images/work-2.jpg",
          "section": "1"
      },
      {
          "title": "Hotel Booking",
          "subtitle": "Web Development",
          "image": "assets/images/work-3.jpg",
          "section": "1"
      },
      {
          "title": "Travel Advisor",
          "subtitle": "Web Development",
          "image": "assets/images/work-4.jpg",
          "section": "1"
      },
      {
          "title": "Personal Portfolio",
          "subtitle": "Web Development",
          "image": "assets/images/work-5.jpg",
          "section": "1"
      },
      {
          "title": "eCommerce",
          "subtitle": "Web Development",
          "image": "assets/images/work-6.jpg",
          "section": "1"
      }
  ]
  }
}
