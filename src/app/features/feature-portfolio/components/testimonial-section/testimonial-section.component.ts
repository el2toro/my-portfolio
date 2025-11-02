import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TestimonialModel } from '../../models/testimonial.model';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatProgressBarModule]
})
export class TestimonialSectionComponent implements OnInit {
  testimonials = <TestimonialModel[]>[];

  constructor(private dataService: DataService) {}
  currentSlide = 0;
  progress = [20, 40, 60, 80, 100];
  stars = [1, 2, 3, 4, 5];
  arrows = [1, 2];

  ngOnInit() {
    this.getTestimonials();
  }

  goToPrevious(count: number) {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.testimonials.length - 1 : previous;
  }

  goToNext(count: number) {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.testimonials.length ? 0 : next;
  }

  getTestimonials(){
    this.dataService.getTestimonials().subscribe({
      next: (testimonials) => this.testimonials = testimonials
    })
  }
}
