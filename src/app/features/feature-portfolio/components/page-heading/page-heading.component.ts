import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.scss']
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
