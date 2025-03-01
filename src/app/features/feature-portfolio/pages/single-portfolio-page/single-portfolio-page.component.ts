import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioWorkModel } from '../../models/portfolio-work.model';
import { DataService } from '../../services/data.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-single-portfolio-page',
  templateUrl: './single-portfolio-page.component.html',
  styleUrls: ['./single-portfolio-page.component.scss']
})
export class SinglePortfolioPageComponent implements OnInit {
  relatedWorks = <PortfolioWorkModel[]>[];
  workId = this.activatedRoute.snapshot.paramMap.get('id');
  selectedWork!: PortfolioWorkModel;
  portfolioWorks = <PortfolioWorkModel[]>[];

  constructor(private activatedRoute: ActivatedRoute, 
    private dataService: DataService) {}

  ngOnInit() {
   this.initData();
  }

  onWorkItemClick(id: number){
    this.selectedWork = this.portfolioWorks.filter(portfolioWork => portfolioWork.id === id)[0];
    
    this.scrollToTop();
  }

  scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  initData(){
   this.dataService.getProjects().subscribe({
    next: (projects) => {
      this.portfolioWorks = projects;
      this.relatedWorks = projects.slice(0, 3);
      this.selectedWork = projects.filter(project => project.id === Number(this.workId))[0];
    },
    error: (error) => console.log(error)
   })
  }
}
