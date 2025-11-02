import { Component, OnInit } from '@angular/core';
import { PageHeadingComponent } from '../../components/page-heading/page-heading.component';

@Component({
  selector: 'app-single-blog-page',
  templateUrl: './single-blog-page.component.html',
  styleUrls: ['./single-blog-page.component.scss'],
  standalone: true,
  imports: [PageHeadingComponent]
})
export class SingleBlogPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
