import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(private overlay: Overlay) { }
  open(config: AppOverlayConfig, component: any) {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    config['positionStrategy'] = positionStrategy;

    const overlayRef = this.overlay.create(config);


    const componentPortal = new ComponentPortal(component);


    overlayRef.attach(componentPortal);
  }
}

export interface AppOverlayConfig extends OverlayConfig { }
