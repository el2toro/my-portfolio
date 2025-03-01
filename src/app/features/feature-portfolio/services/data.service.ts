import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioWorkModel } from '../models/portfolio-work.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
url: string = 'assets/data/portfolio-work.json';

constructor(private http: HttpClient) { }
  getProjects(): Observable<PortfolioWorkModel[]>{
   return this.http.get<PortfolioWorkModel[]>(this.url);
  }
}