import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,MaterialModule,ReactiveFormsModule
  ],
  exports:[LoginComponent,ProfileComponent]
})
export class AuthenticationModule { }
