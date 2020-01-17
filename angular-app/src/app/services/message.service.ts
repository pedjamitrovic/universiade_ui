import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private snackbar: MatSnackBar) {
  }

  error(message: string) {
    this.snackbar.open(message, 'Ok', {duration: 1500, panelClass: 'error-snackbar'});
  }

  success(message: string) {
    this.snackbar.open(message, 'Ok', {duration: 1500, panelClass: 'success-snackbar'});
  }
}
