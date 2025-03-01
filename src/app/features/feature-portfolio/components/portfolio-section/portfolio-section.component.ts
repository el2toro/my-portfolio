import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as portfolioWork from '../../data/portfolio-work.json';
import { PortfolioWorkModel } from '../../models/portfolio-work.model';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {
  portfolioWorks: PortfolioWorkModel[] = portfolioWork;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onWorkItemClick(id: number){
    this.router.navigate([`/single-portfolio-page/${id}`]);
  }
}
