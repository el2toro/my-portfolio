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

  slideIndex = 1;

  constructor() { }

  ngOnInit() {
    this.showDivs(this.slideIndex)
  }


goToPrevious(count: number){
  this.slideIndex += count;
}

goToNext(count: number){
  this.slideIndex += count;
}


 showDivs(n: any) {
  let i;
  let x = document.getElementsByClassName("award-item")

  console.log('lenght: ', x)

  if (n > x.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = x.length}
  for (i = 0; i < 2; i++) {
    console.log('x: ', x)
    //x[i].style.display = "none";  
  }
  //x[this.slideIndex-1].cl .style.display = "block";  
}
}
