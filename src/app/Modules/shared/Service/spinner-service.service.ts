import { Injectable } from '@angular/core';
import { OverlayService } from '../overlay/overlay.module';
import { SpinnerdemoComponent } from './../spinnerdemo/spinnerdemo.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {

  constructor(private previewProgressSpinner:OverlayService){}
  LoadSpinner(){
    let overlayRef = this.previewProgressSpinner.open({ hasBackdrop: true }, SpinnerdemoComponent);

  }
}


