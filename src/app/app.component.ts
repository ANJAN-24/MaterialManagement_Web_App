import { Component } from '@angular/core';
import { OverlayService } from './Modules/shared/overlay/overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:OverlayService){}
  title = 'MaterialManagementClient';

}
