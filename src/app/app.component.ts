import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {

    this.matIconRegistry.addSvgIcon('programmer-laptop', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/programmer-laptop.svg'));
    this.matIconRegistry.addSvgIcon('radio-button-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/radio-button-icon.svg'));
    this.matIconRegistry.addSvgIcon('partner-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/partner-icon.svg'));
    this.matIconRegistry.addSvgIcon('spark-ornament-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/spark-ornament-icon.svg'));
    this.matIconRegistry.addSvgIcon('magic-wand-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/magic-wand-icon.svg'));
    this.matIconRegistry.addSvgIcon('phone-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/phone-icon.svg'));
    this.matIconRegistry.addSvgIcon('email-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/email-icon.svg'));
    this.matIconRegistry.addSvgIcon('address-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/address-icon.svg'));
    this.matIconRegistry.addSvgIcon('button-arrow-right', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/button-arrow-right.svg'));
  }
}
