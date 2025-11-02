import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioWorkModel } from '../../models/portfolio-work.model';
import { DataService } from '../../services/data.service';
import { Location } from '@angular/common';
import { PageHeadingComponent } from '../../components/page-heading/page-heading.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-single-portfolio-page',
  templateUrl: './single-portfolio-page.component.html',
  styleUrls: ['./single-portfolio-page.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent, MatIconModule]
})
export class SinglePortfolioPageComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private location = inject(Location);
  relatedWorks = <PortfolioWorkModel[]>[];
  workId = this.activatedRoute.snapshot.paramMap.get('id');
  selectedWork: PortfolioWorkModel = new PortfolioWorkModel();
  portfolioWorks = <PortfolioWorkModel[]>[];

  constructor() {}

  ngOnInit() {
   this.initData();
  }

  onWorkItemClick(id: number){
    this.selectedWork = this.portfolioWorks.filter(portfolioWork => portfolioWork.id === id)[0];
    this.relatedWorks = this.filterWorkItems(this.portfolioWorks, id);
    this.location.replaceState(`/single-portfolio-page/${id}`); // No reload!
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
      this.relatedWorks = this.filterWorkItems(projects, Number(this.workId));
      this.selectedWork = projects.filter(project => project.id === Number(this.workId))[0];
    },
    error: (error) => console.log(error)
   })
  }

  filterWorkItems(workItems:  PortfolioWorkModel[], workItemId: number) : PortfolioWorkModel[]{
    return workItems.filter(p => p.id !== Number(workItemId)).slice(0, 3);
  }
}
