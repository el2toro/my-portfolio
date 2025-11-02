import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class BlogSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
