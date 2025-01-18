import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
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

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) { }
  

  ngOnInit() {
    //this.animate()
    this.projectCopiledAnimate();
    this.experienceAnimate();
    this.awardsAnimate();
  }

  //TODO: animate when sroll reach the component
  animate(){
    window.addEventListener("scroll", (event: Event) => {
      let scroll = this._document.scrollingElement?.scrollTop.toFixed();
      let heroSectionScroll = this._document.getElementsByClassName('hero-statistic')[0].scrollHeight;

      console.log('Scroll: ', Number(scroll))
      console.log('Scroll hero section: ', heroSectionScroll)
    });   
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
