import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PageHeadingComponent } from '../../components/page-heading/page-heading.component';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
  standalone: true,
  imports: [MatIconModule, PageHeadingComponent]
})
export class ServicePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
