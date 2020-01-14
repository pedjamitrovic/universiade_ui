import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  location = {
    id: 1,
    name: 'Mesara Momčilo',
    description: 'Description',
    reviews: [
      {
        username: 'miki_student',
        comment: 'Comment',
        rating: 4
      },
      {
        username: 'moma_student',
        comment: null,
        rating: 3
      },
      {
        username: 'lule_student',
        comment: 'Comment',
        rating: null
      }
    ]
  };
  averageRating: number;
  roundAverageRating: number;
  subscription: Subscription;
  id: number;
  paginator: { page: number, itemsPerPage: number } = { page: 0, itemsPerPage: 1 };
  pagedReviews: {username: string, comment: string, rating: number}[];

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
    let sum: number = 0;
    let count: number = 0;
    this.location.reviews.forEach((e)=>{
      if(e.rating) {
        sum += e.rating;
        ++count;
      }
    });
    if (count) this.averageRating = sum / count;
    this.roundAverageRating = Math.round(this.averageRating);
    this.paginate();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRate(event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    if (event.oldValue === event.newValue) {
      event.starRating.value = 0;
    }
    alert(event.starRating.value);
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
    if (!this.location) { return false; }
    return this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage < this.location.reviews.length;
  }

  previousExists() {
    if (!this.location) { return false; }
    return (this.paginator.page - 1) * this.paginator.itemsPerPage + this.paginator.itemsPerPage > 0;
  }

  paginate() {
    this.pagedReviews = this.location.reviews.slice(
      this.paginator.page * this.paginator.itemsPerPage,
      this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage
    );
  }
}
