import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';

//  firebaseConfig = {
//     apiKey: "AIzaSyD7_-PoKCO8n1swMTTGSkU1Ou5M-L1nYVo",
//     authDomain: "my-portfolio-001-1.firebaseapp.com",
//     projectId: "my-portfolio-001-1",
//     storageBucket: "my-portfolio-001-1.appspot.com",
//     messagingSenderId: "262894568047",
//     appId: "1:262894568047:web:434c050f92afe612c6439a",
//     measurementId: "G-GLQZH05WNT"
//   };

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {

    this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/menu-icon.svg'));
    this.matIconRegistry.addSvgIcon('close', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/close-icon.svg'));

    this.matIconRegistry.addSvgIcon('programmer-laptop', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/programmer-laptop.svg'));
    this.matIconRegistry.addSvgIcon('radio-button-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/radio-button-icon.svg'));
    this.matIconRegistry.addSvgIcon('partner-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/partner-icon.svg'));
    this.matIconRegistry.addSvgIcon('spark-ornament-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/spark-ornament-icon.svg'));
    this.matIconRegistry.addSvgIcon('magic-wand-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/magic-wand-icon.svg'));
    this.matIconRegistry.addSvgIcon('phone-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/phone-icon.svg'));
    this.matIconRegistry.addSvgIcon('email-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/email-icon.svg'));
    this.matIconRegistry.addSvgIcon('address-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/address-icon.svg'));
    this.matIconRegistry.addSvgIcon('button-arrow-right', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/button-arrow-right.svg'));
    this.matIconRegistry.addSvgIcon('outlined-dot', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/outlined-dot.svg'));

    //Social Media
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/facebook-icon.svg'));
    this.matIconRegistry.addSvgIcon('tiktok', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/tiktok-icon.svg'));
    this.matIconRegistry.addSvgIcon('pinterest', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/pinterest-icon.svg'));
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/linkedin-icon.svg'));

    //Arrows
    this.matIconRegistry.addSvgIcon('chevron-right', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/chevron-rigth.svg'));
    this.matIconRegistry.addSvgIcon('chevron-left', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/chevron-left.svg'));

    // Initialize Firebase
   //const app = initializeApp(this.firebaseConfig);
   //const analytics = getAnalytics(app);
  }
}
