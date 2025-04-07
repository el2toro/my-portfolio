import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
 // firebaseConfig = environment.firebaseConfig;


  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/menu-icon.svg'));
    this.matIconRegistry.addSvgIcon('close', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/close-icon.svg'));

    this.matIconRegistry.addSvgIcon('programmer-laptop', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/programmer-laptop.svg'));
    this.matIconRegistry.addSvgIcon('radio-button-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/radio-button-icon.svg'));
    this.matIconRegistry.addSvgIcon('partner-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/partner-icon.svg'));
    this.matIconRegistry.addSvgIcon('spark-ornament', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/spark-ornament.svg'));
    this.matIconRegistry.addSvgIcon('magic-wand-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/magic-wand-icon.svg'));
    this.matIconRegistry.addSvgIcon('phone-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/phone-icon.svg'));
    this.matIconRegistry.addSvgIcon('email-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/email-icon.svg'));
    this.matIconRegistry.addSvgIcon('address-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/address-icon.svg'));
    this.matIconRegistry.addSvgIcon('button-arrow-right', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/button-arrow-right.svg'));
    this.matIconRegistry.addSvgIcon('outlined-dot', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/outlined-dot.svg'));
    this.matIconRegistry.addSvgIcon('star', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/star.svg'));
    //Social Media
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/facebook-icon.svg'));
    this.matIconRegistry.addSvgIcon('tiktok', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/tiktok-icon.svg'));
    this.matIconRegistry.addSvgIcon('pinterest', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/pinterest-icon.svg'));
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/linkedin-icon.svg'));
    this.matIconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/instagram-icon.svg'));


    //Arrows
    this.matIconRegistry.addSvgIcon('chevron-right', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/chevron-rigth.svg'));
    this.matIconRegistry.addSvgIcon('chevron-left', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/chevron-left.svg'));
    this.matIconRegistry.addSvgIcon('arrow-right', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/arrow-email-button.svg'));
    this.matIconRegistry.addSvgIcon('arrow-basic-right', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/arrow-basic-right.svg'));
    this.matIconRegistry.addSvgIcon('arrow-right2', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/arrow-right2.svg'));

    // Initialize Firebase
   //const app = initializeApp(this.firebaseConfig);
   //const analytics = getAnalytics(app);
  }
}
