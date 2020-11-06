import { Component, OnInit } from '@angular/core';
import { SpinnerServiceService } from './../Service/spinner-service.service';
import {OverlayModule} from '@angular/cdk/overlay';
import { OverlayService } from '../overlay/overlay.module';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private spinnerService : SpinnerServiceService,) { }

  ngOnInit(): void {
  }

  LoadSpinner(){
this.spinnerService.LoadSpinner();
}



}
