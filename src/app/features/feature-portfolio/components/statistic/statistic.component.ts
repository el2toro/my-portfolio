import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @HostListener('window:scroll', [])
  public onViewportScroll(){
    if(this.scrollService.isInView(this.statistic) && this.counter < this.viewCount){
      this.counter++
      this.animate();
    }
  }
  
  projectCopiled = 0;
  experience = 0;
  awards = 0;

  private projectCopiledCounter = 20;
  private experienceCounter = 5;
  private awardsCounter = 8;
  private counter = 0;
  private viewCount = 1;

  constructor(private statistic: ElementRef, private scrollService: ScrollService) { }
  
  ngOnInit() {
    
  }

  animate(){
    this.projectCopiledAnimate();
    this.experienceAnimate();
    this.awardsAnimate();
  }

  //TODO: refactoring   DRY
  projectCopiledAnimate(){
    let projectCountUp = setInterval(() => {
      this.projectCopiled++;
      if(this.projectCopiled === this.projectCopiledCounter){
        clearInterval(projectCountUp)
      }
    }, 80);
  }

  experienceAnimate(){
    let experienceCountUp = setInterval(() => {
      this.experience++;
      if(this.experience === this.experienceCounter){
        clearInterval(experienceCountUp)
      }
    }, 80);
  }

  awardsAnimate(){
    let awardsCountUp = setInterval(() => {
      this.awards++;
      if(this.awards === this.awardsCounter){
        clearInterval(awardsCountUp)
      }
    }, 80);
  }
}
