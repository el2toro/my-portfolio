import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume-awards-section',
  templateUrl: './resume-awards-section.component.html',
  styleUrls: ['./resume-awards-section.component.scss']
})
export class ResumeAwardsSectionComponent implements OnInit {
  @ViewChild('awardContainer') awardContainer: ElementRef | undefined;

  awards = [
    {
      title: 'MTA',
      year: '2022',
      description: 'Software Development Fundamentals'
    },
    {
      title: 'CDMT',
      year: '2022',
      description: 'Certified Developer for Microsoft Technologies'
    },
    {
      title: 'Microsoft Certified',
      year: '2020',
      description: 'Azure Fundamentals'
    },
    {
      title: 'CompTIA Security +',
      year: '2020',
      description: 'Cyber Security Certified'
    },
  ];

  progress = [25, 50, 75, 100]

  currentSlide = 0;

  constructor() { }

  ngOnInit() {
  }


goToPrevious(count: number){
  const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.awards.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
}

goToNext(count: number){
  const next = this.currentSlide + 1;
  this.currentSlide = next === this.awards.length ? 0 : next;
  console.log("next clicked, new current slide is: ", this.currentSlide);
}

}
