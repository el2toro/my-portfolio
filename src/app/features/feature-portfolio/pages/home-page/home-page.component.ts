import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('statistic') statistic!: ElementRef;

  @HostListener('window:scroll', [])
  public onViewportScroll(){
    // ⤵️ Captures / defines current window height when called
const windowHeight = window.innerHeight;
// ⤵️ Captures bounding rectangle of 5th element
const boundingRectheroSecrion = this.statistic.nativeElement.getBoundingClientRect();
// ⤵️ Captures bounding rectangle of 8th element
//const boundingRectEight = this.divEight.nativeElement.getBoundingClientRect();

//console.log('windowHeight: ', windowHeight)
//console.log('boundingRectFive: ', boundingRectheroSecrion)
const isInView = boundingRectheroSecrion.top >= 0 && boundingRectheroSecrion.top <= window.innerHeight;

if(isInView){
 // console.log('Is in view OK')
}

  }
  constructor() { }

  ngOnInit() {
  }

}
