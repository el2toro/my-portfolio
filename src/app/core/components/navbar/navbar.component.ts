import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  get isMobile(): boolean{
    return this.deviceDetectorService.isMobile();
  }

  get isTablet(): boolean{
    return this.deviceDetectorService.isTablet();
  }

  get isDesktop(): boolean{
    return this.deviceDetectorService.isDesktop();
  }

  constructor(private deviceDetectorService: DeviceDetectorService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) { 
    
  }

  ngOnInit() {
    this.matIconRegistry.addSvgIcon('burger-menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/burger-menu-1.svg'));
  }

  myFunction() {
    let x = document.getElementById("navbar") ;
    if (x?.className === "navbar") {
      x.className += " responsive";
    } else {
      //x.className = "topnav";
    }
  }
}
