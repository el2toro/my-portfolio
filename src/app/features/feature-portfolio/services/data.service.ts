import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioWorkModel } from '../models/portfolio-work.model';
import { TestimonialModel } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
projectsUrl: string = 'assets/data/portfolio-work.json';
testimonialsUrl: string = 'assets/data/testimonials.json';

constructor(private http: HttpClient) { }

  getProjects(): Observable<PortfolioWorkModel[]>{
   return this.http.get<PortfolioWorkModel[]>(this.projectsUrl);
  }

  getTestimonials(): Observable<TestimonialModel[]>{
    return this.http.get<TestimonialModel[]>(this.testimonialsUrl);
  }
}