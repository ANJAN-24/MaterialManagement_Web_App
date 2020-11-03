import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private _snackBar: MatSnackBar) { }
   showNotification(message:string,action:string)
   {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
   }

}