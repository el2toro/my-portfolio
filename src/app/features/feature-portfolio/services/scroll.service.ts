import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

constructor() { }

 isInView(element: ElementRef): Boolean{
  const boundingRectheroSecrion = element.nativeElement.getBoundingClientRect();
  const isInView = boundingRectheroSecrion.top >= 0 && boundingRectheroSecrion.top <= window.innerHeight;

  return isInView;
 }
}
