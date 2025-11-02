import { Component, OnInit } from '@angular/core';
import { PageHeadingComponent } from '../../components/page-heading/page-heading.component';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent]
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
