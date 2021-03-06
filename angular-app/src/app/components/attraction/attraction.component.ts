import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';
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
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      minWidth: 200,
      minHeight: 40,
      maxHeight: '80vh',
      data: { pictures: this.attraction.pictures }
    });
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
