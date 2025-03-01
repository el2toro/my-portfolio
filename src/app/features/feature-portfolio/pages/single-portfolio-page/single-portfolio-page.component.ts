import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { PortfolioWorkModel } from '../../models/portfolio-work.model';

@Component({
  selector: 'app-single-portfolio-page',
  templateUrl: './single-portfolio-page.component.html',
  styleUrls: ['./single-portfolio-page.component.scss']
})
export class SinglePortfolioPageComponent implements OnInit {
  relatedWorks = <PortfolioWorkModel[]>[];
  workId = this.activatedRoute.snapshot.paramMap.get('id');
  selectedWork: PortfolioWorkModel = new PortfolioWorkModel();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
   this.initData();
   this.selectedWork = this.relatedWorks.find(relatedWork => relatedWork.id === Number(this.workId)) as PortfolioWorkModel;
  }

  onWorkItemClick(id: number){
    this.selectedWork = this.relatedWorks.find(relatedWork => relatedWork.id === id) as PortfolioWorkModel;
    
    this.scrollToTop();
  }

  scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  initData(){
    this.relatedWorks = [
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
      }
    ]
  }
}
