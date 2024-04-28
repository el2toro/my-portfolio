import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShellComponent } from './components/shell/shell.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ShellComponent
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
