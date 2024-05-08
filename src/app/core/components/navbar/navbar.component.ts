import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('pagesDropDown') pagesDropDown: ElementRef | undefined;

  constructor(private deviceDetectorService: DeviceDetectorService) { 
    
  }
  ngAfterViewInit(): void {
  }

  ngOnInit() {
  }

  showPageDropdown() {
    this.pagesDropDown?.nativeElement.classList.toggle('show');
  }
}
