import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.scss']
})
export class ResumeSectionComponent implements OnInit {

  sectionName = 'aboutme';

  constructor() { }

  ngOnInit() {
  }

  loadSection(section: string){
    console.log('section: ', section)
    this.sectionName = section;
  }
}
