import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-single-portfolio-page',
  templateUrl: './single-portfolio-page.component.html',
  styleUrls: ['./single-portfolio-page.component.scss']
})
export class SinglePortfolioPageComponent implements OnInit {

  workId = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onWorkItemClick(id: number){
    console.log('navigate')
    this.router.navigate([`/single-portfolio-page/${id}`])
  }
}
