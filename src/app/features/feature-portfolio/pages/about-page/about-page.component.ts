import { Component, OnInit } from '@angular/core';
import { PageHeadingComponent } from '../../components/page-heading/page-heading.component';
import { AboutMeSectionComponent } from '../../components/about/about-me-section/about-me-section.component';
import { ExperienceSectionComponent } from '../../components/about/experience-section/experience-section.component';
import { SkillsSectionComponent } from '../../components/about/skills-section/skills-section.component';
import { PartnerSectionComponent } from '../../components/about/partner-section/partner-section.component';
import { AchievementSectionComponent } from '../../components/about/achievement-section/achievement-section.component';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  standalone: true,
  imports: [
    PageHeadingComponent, 
    AboutMeSectionComponent, 
    ExperienceSectionComponent,
    SkillsSectionComponent,
    PartnerSectionComponent,
    AchievementSectionComponent
  ]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
