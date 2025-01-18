import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  projectCopiled = 0;
  experience = 0 ;
  awards = 0;

  private projectCopiledCounter = 20;
  private experienceCounter = 5;
  private awardsCounter = 8;

  @ViewChild('statistic') input: any;
  // intersection observer
  private _observer: IntersectionObserver | any;

  // intersection trigger
  private _intersect$ = new Subject<void>();

  constructor(private _element: ElementRef) { }

  ngOnInit() {
    this.projectCopiledAnimate();
    this.experienceAnimate();
    this.awardsAnimate();

    console.log(this.input)
  }

  projectCopiledAnimate(){
    let projectCountUp = setInterval(() => {
      this.projectCopiled++;
      if(this.projectCopiled === this.projectCopiledCounter){
        clearInterval(projectCountUp)
      }
    }, 50);
  }

  experienceAnimate(){
    let experienceCountUp = setInterval(() => {
      this.experience++;
      if(this.experience === this.experienceCounter){
        clearInterval(experienceCountUp)
      }
    }, 50);
  }

  awardsAnimate(){
    let awardsCountUp = setInterval(() => {
      this.awards++;
      if(this.awards === this.awardsCounter){
        clearInterval(awardsCountUp)
      }
    }, 50);
  }
}
