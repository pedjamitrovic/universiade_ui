import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Attraction } from 'src/app/model/attraction';
import { AttractionService } from 'src/app/services/attraction.service';
import { UserService } from 'src/app/services/user.service';

export interface GalleryDialogData {
  pictures: { url: string }[];
}

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  id: number;
  attraction: Attraction;
  liked: boolean;
  currentIndex = 0;
  picture: { url: string};

  constructor(private route: ActivatedRoute, private dialog: MatDialog, private attractionService: AttractionService, private userService: UserService) { }

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
    this.attraction = this.attractionService.getAttraction(this.id);
    this.liked = this.attraction.likes.includes(this.userService.user.id);
    this.paginate();
  }

  nextPage() {
    ++this.currentIndex;
    this.paginate();
  }

  previousPage() {
    --this.currentIndex;
    this.paginate();
  }

  nextExists() {
    if (!this.attraction.pictures) { return false; }
    return this.currentIndex + 1 < this.attraction.pictures.length;
  }

  previousExists() {
    if (!this.attraction.pictures) { return false; }
    return this.currentIndex > 0;
  }

  paginate() {
    this.picture = this.attraction.pictures[this.currentIndex];
  }

  like() {
    this.attractionService.like(this.id);
    this.initData();
  }

  dislike() {
    this.attractionService.dislike(this.id);
    this.initData();
  }
}
