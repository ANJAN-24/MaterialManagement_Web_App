import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthenticationModule } from '../authentication/authentication.module';


@NgModule({
  declarations: [NavbarComponent],
  imports: [

  CommonModule,MaterialModule,AppRoutingModule,AuthenticationModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
