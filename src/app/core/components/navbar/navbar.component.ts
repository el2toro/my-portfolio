import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('pagesDropDown') pagesDropDown: ElementRef | undefined;
  @ViewChild('navbarItems') navbarItems: ElementRef | undefined;

  constructor(private deviceDetectorService: DeviceDetectorService, private router: Router) { 
    
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
}
