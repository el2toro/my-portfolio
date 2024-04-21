import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ShellComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
