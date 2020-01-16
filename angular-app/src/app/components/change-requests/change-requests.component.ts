import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { Location, ChangeRequest } from 'src/app/model/location';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-requests',
  templateUrl: './change-requests.component.html',
  styleUrls: ['./change-requests.component.scss']
})
export class ChangeRequestsComponent implements OnInit {
  changeRequestForm: FormGroup;
  locations: Location[];
  filteredLocations: Location[];
  changeRequests: ChangeRequest[];
  pagedRequests: ChangeRequest[];
  paginator: { page: number, itemsPerPage: number } = { page: 0, itemsPerPage: 1 };

  constructor(private locationService: LocationService, private userService: UserService) {
    this.initForm();
  }

  ngOnInit() {
    this.initData();
    this.paginate();
  }

  initForm() {
    this.changeRequestForm = new FormGroup({
      oldLocation: new FormControl({ value: '', disabled: true }, [Validators.required]),
      newLocation: new FormControl({ value: '' }, [Validators.required]),
    });
  }

  initData() {
    this.locations = this.locationService.locations;
    this.changeRequests = [];
    this.locations.forEach((l) => this.changeRequests.push(...l.changeRequests));
  }

  nextPage() {
    ++this.paginator.page;
    this.paginate();
  }

  previousPage() {
    --this.paginator.page;
    this.paginate();
  }

  nextExists() {
    if (!this.changeRequests) { return false; }
    return this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage < this.changeRequests.length;
  }

  previousExists() {
    if (!this.changeRequests) { return false; }
    return (this.paginator.page - 1) * this.paginator.itemsPerPage + this.paginator.itemsPerPage > 0;
  }

  paginate() {
    this.pagedRequests = this.changeRequests.slice(
      this.paginator.page * this.paginator.itemsPerPage,
      this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage
    );
    this.filterLocations();
  }

  filterLocations() {
    if (!this.locations.length || !this.pagedRequests.length) return;
    this.filteredLocations = this.locations.filter((l) => l.name !== this.pagedRequests[0].oldLocation && l.type === this.pagedRequests[0].oldLocationType);
    this.changeRequestForm.controls.oldLocation.setValue(this.pagedRequests[0].oldLocation);
    this.changeRequestForm.controls.newLocation.setValue(this.filteredLocations[0].id);
  }

  accept() {
    if (this.changeRequestForm.invalid) return;
    this.locationService.acceptChangeRequest(this.pagedRequests[0].userId, this.pagedRequests[0].oldLocation, this.changeRequestForm.controls.newLocation.value);
    this.initData();
    this.paginate();
  }

  reject() {
    this.locationService.rejectChangeRequest(this.pagedRequests[0].userId, this.pagedRequests[0].oldLocation);
    this.initData();
    this.paginate();
  }

}
