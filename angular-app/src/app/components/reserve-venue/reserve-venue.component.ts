import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-reserve-venue',
  templateUrl: './reserve-venue.component.html',
  styleUrls: ['./reserve-venue.component.scss']
})
export class ReserveVenueComponent implements OnInit {
  reserveVenueForm: FormGroup;
  constructor(private message: MessageService) { }

  ngOnInit() {
    this.reserveVenueForm = new FormGroup({
      startDate: new FormControl({value: '', disabled: true}, [Validators.required]),
      endDate: new FormControl({value: '', disabled: true}, [Validators.required]),
    });
  }

  reserve() {
    if (!this.reserveVenueForm.controls.startDate.value) {
      this.message.error('Start date is required');
      return;
    }
    if (!this.reserveVenueForm.controls.endDate.value) {
      this.message.error('End date is required');
      return;
    }
    if (this.reserveVenueForm.controls.startDate.value >= this.reserveVenueForm.controls.endDate.value) {
      this.message.error('End date must be after start date');
      return;
    }
    this.message.success('Successfully reserved venue');
  }
}
