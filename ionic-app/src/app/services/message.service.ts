import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {
  }

  error(message: string) {
    // this.snackbar.open(message, 'Ok', {duration: 1500, panelClass: 'error-snackbar'});
  }

  success(message: string) {
    // this.snackbar.open(message, 'Ok', {duration: 1500, panelClass: 'success-snackbar'});
  }
}
