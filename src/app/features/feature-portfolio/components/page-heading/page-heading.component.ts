import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss'],
  standalone: true
})
export class PageHeadingComponent implements OnInit {

  @Input() title = '';
  @Input() subtitle = '';

  get titleFormated(): string{
    return this.title.toUpperCase();
  }

  constructor() { }

  ngOnInit() {
  }
}
