import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-portfolio-page',
  templateUrl: './single-portfolio-page.component.html',
  styleUrls: ['./single-portfolio-page.component.scss']
})
export class SinglePortfolioPageComponent implements OnInit {

  workId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
}
