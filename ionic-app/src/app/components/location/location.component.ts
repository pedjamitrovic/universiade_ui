import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarRatingComponent } from 'ng-starrating';
import { Location, Review, ChangeRequest } from 'src/app/model/location';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  location: Location;
  averageRating: number;
  roundAverageRating: number;
  subscription: Subscription;
  id: number;
  paginator: { page: number; itemsPerPage: number } = {
    page: 0,
    itemsPerPage: 1
  };
  pagedReviews: Review[];
  changeRequest: ChangeRequest = new ChangeRequest();
  review: Review = new Review();

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    public userService: UserService,
    private message: MessageService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params.id;
      this.initData();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initData() {
    this.location = this.locationService.getLocation(this.id);

    this.initForm();

    let sum = 0;
    let count = 0;
    this.location.reviews.forEach(r => {
      if (r.rating) {
        sum += r.rating;
        ++count;
      }
    });
    if (count) { this.averageRating = sum / count; }
    this.roundAverageRating = Math.round(this.averageRating);
    this.paginate();
  }

  initForm() {
    this.changeRequest.userId = this.userService.user.id;
    this.changeRequest.oldLocation = this.location.name;
    this.changeRequest.oldLocationType = this.location.type;
    const changeRequest = this.location.changeRequests.find(
      cr => cr.userId === this.userService.user.id
    );
    if (changeRequest) {
      this.changeRequest.description = changeRequest.description;
    }

    this.review.userId = this.userService.user.id;
    this.review.rating = 0;
    const review = this.location.reviews.find(
      r => r.userId === this.userService.user.id
    );
    if (review) {
      this.review.rating = review.rating;
      this.review.description = review.description;
    }
  }

  onRate(event: {
    oldValue: any;
    newValue: any;
    starRating: StarRatingComponent;
  }) {
    // tslint:disable-next-line: radix
    const ov = parseInt(event.oldValue.toString());
    // tslint:disable-next-line: radix
    const nv = parseInt(event.newValue.toString());
    if (ov === nv) {
      this.review.rating = event.starRating.value = 0;
    } else {
      this.review.rating = nv;
    }
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
    if (!this.location) {
      return false;
    }
    return (
      this.paginator.page * this.paginator.itemsPerPage +
        this.paginator.itemsPerPage <
      this.location.reviews.length
    );
  }

  previousExists() {
    if (!this.location) {
      return false;
    }
    return (
      (this.paginator.page - 1) * this.paginator.itemsPerPage +
        this.paginator.itemsPerPage >
      0
    );
  }

  paginate() {
    this.pagedReviews = this.location.reviews.slice(
      this.paginator.page * this.paginator.itemsPerPage,
      this.paginator.page * this.paginator.itemsPerPage +
        this.paginator.itemsPerPage
    );
  }

  postReview() {
    if (!this.review.description && !this.review.rating) {
      this.message.error('Please provide description or rating to post review');
      return;
    }
    this.locationService.postReview(this.location.id, this.review);
    this.initData();
  }

  submitRequest() {
    if (!this.changeRequest.description) {
      this.message.error(
        'Please provide reason for change before submitting request'
      );
      return;
    }
    this.locationService.submitRequest(this.location.id, this.changeRequest);
    this.initData();
  }
}
