import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  private router = inject(Router);
  @ViewChild('pagesDropDown') pagesDropDown: ElementRef | undefined;
  @ViewChild('navbarItems') navbarItems: ElementRef | undefined;

  constructor() { 
    
  }
  ngAfterViewInit(): void {
  }

  ngOnInit() {
    let navbarButtons = Array.from(document.getElementsByClassName('navbar-buttons'));
    navbarButtons[0].classList.add('focused-menu')
  }

  showPageDropdown() {
    this.pagesDropDown?.nativeElement.classList.toggle('show');
  }

  toggleActiveMenu(event: any){
    let navbarButtons = Array.from(document.getElementsByClassName('navbar-buttons'));

    navbarButtons.forEach(button => button.classList.remove('focused-menu'))

    if(Array.from(event.srcElement.classList).includes('navbar-buttons')){
      event.srcElement.classList.add('focused-menu')
      return;
    }

    if(Array.from(event.srcElement.classList).includes('contact-button')){
      navbarButtons.forEach(button => button.classList.remove('focused-menu'))
      return;
    }

    navbarButtons[0].classList.add('focused-menu')
    
  }

  goToHomePage(){
    this.router.navigate([''])
  }

  navigate(path: string){
    this.router.navigate([path]);
  }
}
