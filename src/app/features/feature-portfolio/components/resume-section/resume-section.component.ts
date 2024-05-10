import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss']
})
export class ResumeSectionComponent {

  @ViewChild('aboutMeButton') aboutMeButton: ElementRef | undefined;

  sectionName = 'aboutme';
  sections = ['ABOUT ME', 'EXPERIENCE', 'EDUCATION', 'SKILLS', 'AWARDS'];
  sectionsData = ['aboutme', 'experience', 'education', 'skills', 'awards'];
  index = 0;

  constructor() { }

  nextSection(){
    if(this.index === this.sections.length - 1) { return; }
    this.index += 1; 
    
    this.sectionName = this.sectionsData[this.index]
  }

  previuosSection(){
    if(this.index === 0) { return; }
    this.index -= 1;

    this.sectionName = this.sectionsData[this.index]
  }

  loadSection(section: string){

    this.sectionName = section;
  }
}
