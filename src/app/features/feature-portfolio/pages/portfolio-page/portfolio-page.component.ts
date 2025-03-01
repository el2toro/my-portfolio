import { Component, OnInit } from '@angular/core';
import { PortfolioWorkModel } from '../../models/portfolio-work.model';
import * as  portfolioWorks from '../../data/portfolio-work.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  sectionName = 'aboutme';
  sections = [ 'VIEW ALL', 'CREATIVE', 'DEVELOPMENT', 'BRANDING', 'WEB DESIGN'];
  desktopSections = ['all', 'creative', 'development', 'branding', 'webdesign'];

  sectionNameMobile = 'VIEW ALL';
  index = 0;
  data: PortfolioWorkModel[] =  portfolioWorks;

  constructor(private router: Router) { }

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

  getSelectedWorkList(sectionName: string){
    this.index = this.desktopSections.indexOf(sectionName)
  }

  onWorkItemClick(id: number){
    this.router.navigate([`/single-portfolio-page/${id}`])
  }

  initData(){
    this.data = [
      {
          "id": 1,
          "title": "Boutique Web Design",
          "subtitle": "Web Development",
          "image": "assets/images/work-1.jpg",
          "section": "1",
      },
      {
          "id": 2,
          "title": "Landing Page",
          "subtitle": "Web Development",
          "image": "assets/images/work-2.jpg",
          "section": "1"
      },
      {
          "id": 3,
          "title": "eCommerce ",
          "subtitle": "Web Development",
          "image": "assets/images/work-3.jpg",
          "section": "1"
      },
      {
          "id": 4,
          "title": "Food Delivery",
          "subtitle": "Web Development",
          "image": "assets/images/work-4.jpg",
          "section": "1"
      },
      {
          "id": 5,
          "title": "Personal Portfolio",
          "subtitle": "Web Development",
          "image": "assets/images/work-5.jpg",
          "section": "1"
      },
      {
          "id": 6,
          "title": "Hotel Booking",
          "subtitle": "Web Development",
          "image": "assets/images/work-6.jpg",
          "section": "1"
      }
  ]
  }
}
