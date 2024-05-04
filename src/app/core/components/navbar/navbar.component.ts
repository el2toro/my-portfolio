import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pages = [
    'Me', 'Your Page', 'The page'
  ]

  get isMobile(): boolean{
    return this.deviceDetectorService.isMobile();
  }

  get isTablet(): boolean{
    return this.deviceDetectorService.isTablet();
  }

  get isDesktop(): boolean{
    return this.deviceDetectorService.isDesktop();
  }

  constructor(private deviceDetectorService: DeviceDetectorService) { 
    
  }

  ngOnInit() {
    
      // Close the dropdown menu if the user clicks outside of it
document.onclick = function(event: any) {
  if (!event?.target?.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
   
  }

  showDropdown() {
    console.log('nav: ', document.getElementById("dropdown-content")?.classList)

    document.getElementById("dropdown-content")?.classList?.toggle("show");

    console.log('nav: ', document.getElementById("dropdown-content")?.classList)
  }

}
