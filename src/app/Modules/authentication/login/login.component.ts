import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Variable Declaration start
  showPassword:Boolean=false;
  isLoading:Boolean=false;
  userCredential=new FormGroup({
    Email:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required])
  }
  )

  // Variable Decleration Ends
  constructor() { }

  ngOnInit(): void {
  }
  loginUser():void{

  }

}
