import { Component, OnInit } from '@angular/core';
import { PortfolioWorkModel } from '../../models/portfolio-work.model';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { PageHeadingComponent } from '../../components/page-heading/page-heading.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent, MatIconModule]
})
export class PortfolioPageComponent implements OnInit {

  sectionName = 'aboutme';
  sections = [ 'VIEW ALL', 'CREATIVE', 'DEVELOPMENT', 'BRANDING', 'WEB DESIGN'];
  desktopSections = ['all', 'creative', 'development', 'branding', 'webdesign'];

  sectionNameMobile = 'VIEW ALL';
  index = 0;
  projects = <PortfolioWorkModel[]>[];

  constructor(private router: Router, 
    private dataService: DataService) { }

  ngOnInit() {
    this.initData();
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
      return this.projects;
    }
    return this.projects.filter(project => project.section === this.index.toString());
  }

  getSelectedWorkList(sectionName: string){
    this.index = this.desktopSections.indexOf(sectionName)
  }

  onWorkItemClick(id: number){
    this.scrollToTop();
    this.router.navigate([`/single-portfolio-page/${id}`])
  }

  initData(){
    this.dataService.getProjects().subscribe({
      next: (projects ) => this.projects = projects,
      error: (error) => console.log(error)
    })
  }

  scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
