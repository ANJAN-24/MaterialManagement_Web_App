import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[LoginComponent,ProfileComponent]
})
export class AuthenticationModule { }
