import { CommonModule, DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Observable, fromEvent, map } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, NavbarComponent]
})
export class ShellComponent implements OnInit {
  scrollPosition = false;
  private readonly document = inject(DOCUMENT);
  private readonly viewport = inject(ViewportScroller);
  
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    this.scrollPosition = this.viewport.getScrollPosition()?.[1] > 0;
  }
  constructor() { }

  ngOnInit() {
  }

 

  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(
    map(() => this.viewport.getScrollPosition()?.[1] > 0)
  );

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }
}
