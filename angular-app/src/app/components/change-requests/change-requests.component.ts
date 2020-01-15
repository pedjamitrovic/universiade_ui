import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-requests',
  templateUrl: './change-requests.component.html',
  styleUrls: ['./change-requests.component.scss']
})
export class ChangeRequestsComponent implements OnInit {
  changeRequestForm: FormGroup;
  locations: any[] = ['1st location', '2nd location'];
  paginator: { page: number, itemsPerPage: number } = { page: 0, itemsPerPage: 1 };
  changeRequests: {userId: number, description: string, oldLocation: string}[] = [
    {
      userId: 1,
      description: 'The restaurant is awful! I want to eat in a restaurant, not in a butcher shop.',
      oldLocation: 'Mesara Momčilo'
    },
    {
      userId: 2,
      description: 'The restaurant is awful! Can I eat in a restaurant with Italian cuisine?',
      oldLocation: 'Mesara Momčilo'
    },
    {
      userId: 3,
      description: 'The restaurant is awful! Can I eat in a restaurant with Spanish cuisine?',
      oldLocation: 'Mesara Momčilo'
    }
  ];
  pagedRequests: {userId: number, description: string, oldLocation: string}[];

  constructor() { }

  ngOnInit() {
    this.initForm();
    this.paginate();
  }

  initForm() {
    this.changeRequestForm = new FormGroup({
      oldLocation: new FormControl({value: '1st location', disabled: true}, [Validators.required]),
      newLocation: new FormControl({value: ''}, [Validators.required]),
    });
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
  }

}
