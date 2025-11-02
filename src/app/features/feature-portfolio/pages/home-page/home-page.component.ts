import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { StatisticComponent } from '../../components/statistic/statistic.component';
import { ResumeSectionComponent } from '../../components/resume-section/resume-section.component';
import { PortfolioSectionComponent } from '../../components/portfolio-section/portfolio-section.component';
import { ServiceSectionComponent } from '../../components/service-section/service-section.component';
import { TestimonialSectionComponent } from '../../components/testimonial-section/testimonial-section.component';
import { BlogSectionComponent } from '../../components/blog-section/blog-section.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    HeroSectionComponent, 
    StatisticComponent,
    ResumeSectionComponent, 
    PortfolioSectionComponent, 
    ServiceSectionComponent,
    TestimonialSectionComponent,
    BlogSectionComponent
  ]
})
export class HomePageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

}
