import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss']
})
export class ResumeSectionComponent implements OnInit {

  @ViewChild('aboutMeButton') aboutMeButton: ElementRef | undefined;

  sectionName = 'aboutme';
  sections = ['ABOUT ME', 'EXPERIENCE', 'EDUCATION', 'SKILLS', 'AWARDS'];
  sectionsData = ['aboutme', 'experience', 'education', 'skills', 'awards'];
  index = 0;

  constructor() { }
  ngOnInit(): void {
    let navbarButtons = Array.from(document.getElementsByClassName('resume-navbar-button'));
    navbarButtons[0].classList.add('resume-focused-menu')
  }

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

  loadSection(section: string, event: any){
    this.sectionName = section;

    this.toggleActiveMenu(event);
  }

  toggleActiveMenu(event: any){
    let navbarButtons = Array.from(document.getElementsByClassName('resume-navbar-button'));

    navbarButtons.forEach(button => button.classList.remove('resume-focused-menu'));

    if(Array.from(event.srcElement.classList).includes('resume-navbar-button')){
      event.srcElement.classList.add('resume-focused-menu');
      return;
    }

    navbarButtons[0].classList.add('resume-focused-menu');
  }
}
