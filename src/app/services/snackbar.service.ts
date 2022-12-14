import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  public openSnackBar(msg: string, actionLabel: string, 
    duration: number, verticalPosition:MatSnackBarVerticalPosition = 'bottom', 
    horizontalPosition: MatSnackBarHorizontalPosition = 'center'  ){
    this.snackBar.open(msg, actionLabel, {
      duration ,
      horizontalPosition ,
      verticalPosition
    });
  }
}
