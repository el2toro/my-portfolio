import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioWorkModel } from '../../models/portfolio-work.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {
  portfolioWorksFirstRow = <PortfolioWorkModel[]>[];
  portfolioWorksSecondRow = <PortfolioWorkModel[]>[];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.initData();
   // this.addClass();
  }

  onWorkItemClick(id: number){
    this.scrollToTop();
    this.router.navigate([`/single-portfolio-page/${id}`]);
    
  }

  initData(){
    this.dataService.getProjects().subscribe({
      next: (projects) => {
        this.portfolioWorksFirstRow = projects.slice(0, 3);
        this.portfolioWorksSecondRow = projects.slice(3, 6);
      },
      error: (error) => console.log(error)
    })
  }

  addClass(){
    let workItems  = document.getElementsByClassName('work-item');
    workItems[0].classList.add('custom-inner-work-item');
    workItems[5].classList.add('custom');

    let innerWorkItem = document.getElementsByClassName('inner-work-item');
    console.log(innerWorkItem)
    //innerWorkItem[5].classList.add('custom-inner-work-item');
  }

  scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
