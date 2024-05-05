import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss']
})
export class ResumeSectionComponent implements OnInit, AfterViewInit {

  @ViewChild('aboutMeButton') aboutMeButton: ElementRef | undefined;

  sectionName = 'aboutme';
  sections = [ 'ABOUT ME', 'EXPERIENCE', 'EDUCATION', 'SKILLS', 'AWARDS'];

  sectionNameMobile = 'ABOUT ME';
  index = 0;

  constructor() { }

  ngAfterViewInit(): void {
    this.addFocusedButtonClass();
  }

  ngOnInit() {
  }

  nextSection(){
    console.log(this.index)
    if(this.index === 4) { return; }
    this.index + 2;

    console.log('after: ', this.index)
    
  }

  previuosSection(){
    console.log(this.index)
    if(this.index === 0) { return; }
    this.index - 1;
  }

  loadSection($event: any, section: string){

    // console.log($event.target.nativeElement.classList.add('focused-button'))

    this.sectionName = section;
    this.removeClassToButton();
  }

  private addFocusedButtonClass(){
    this.aboutMeButton?.nativeElement.classList.add('focused-button')
  }

  private removeClassToButton(){
    const classList = this.aboutMeButton?.nativeElement.classList as DOMTokenList;

    console.log('class list:', classList.value.includes('focused-button'))

    if( classList?.value?.includes('focused-button')){
      this.aboutMeButton?.nativeElement.classList.remove('focused-button')
      return;
    }
  }
}
