import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import { SharedModule } from './Modules/shared/shared.module';
import { SpinnerComponent } from './Modules/shared/spinner/spinner.component';

@NgModule({
  // entryComponents:[SpinnerComponent],
  declarations: [
    AppComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthenticationModule,
    SharedModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
