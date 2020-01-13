import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';

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
  pictures: any[] = [{
    url: 'assets/pictures/gallery/1.jpg'
  },
  {
    url: 'assets/pictures/gallery/2.jpg'
  },
  {
    url: 'assets/pictures/gallery/3.jpg'
  },
  {
    url: 'assets/pictures/gallery/4.jpg'
  },
  {
    url: 'assets/pictures/gallery/5.jpg'
  }];

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GalleryDialogComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: { pictures: this.pictures }
    });
  }

}
