import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerdemoComponent } from './spinnerdemo/spinnerdemo.component';

@NgModule({
  declarations: [NavbarComponent, SpinnerComponent, SpinnerdemoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    AuthenticationModule,
    MatProgressSpinnerModule,
  ],
  exports: [NavbarComponent, SpinnerComponent],
})
export class SharedModule {}
