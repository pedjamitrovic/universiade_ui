import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryDialogData } from '../attraction.component';

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent implements OnInit {
  picture: { url: string };
  currentIndex: number = 0;

  constructor(
    public dialogRef: MatDialogRef<GalleryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GalleryDialogData) { }
  
  ngOnInit() {
    this.paginate();
  }

  onNoClick(): void {
    this.dialogRef.close();
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
    if (!this.data.pictures) { return false; }
    return this.currentIndex + 1 < this.data.pictures.length;
  }

  previousExists() {
    if (!this.data.pictures) { return false; }
    return this.currentIndex > 0;
  }

  paginate() {
    this.picture = this.data.pictures[this.currentIndex];
  }
}
