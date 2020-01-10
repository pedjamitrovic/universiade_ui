import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit {
  attractions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  pagedAttractions: number[];
  paginator: { page: number, itemsPerPage: number } = { page: 0, itemsPerPage: 1 };
  constructor() { }

  ngOnInit() {
    this.paginator.itemsPerPage = Math.floor(window.innerWidth / 400);
    this.paginator.page = 0;
    this.paginate();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const itemsPerPage = Math.floor(event.target.innerWidth / 400);
    if (itemsPerPage === this.paginator.itemsPerPage) { return; }
    this.paginator.itemsPerPage = itemsPerPage;
    this.paginator.page = 0;
    this.paginate();
  }

  public nextPage() {
    ++this.paginator.page;
    this.paginate();
  }

  public previousPage() {
    --this.paginator.page;
    this.paginate();
  }

  public nextExists() {
    if (!this.attractions) { return false; }
    return this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage < this.attractions.length;
  }

  public previousExists() {
    if (!this.attractions) { return false; }
    return (this.paginator.page - 1) * this.paginator.itemsPerPage + this.paginator.itemsPerPage > 0;
  }

  public paginate() {
    this.pagedAttractions = this.attractions.slice(
      this.paginator.page * this.paginator.itemsPerPage,
      this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage
    );
  }

}
