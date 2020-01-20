import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AttractionService } from 'src/app/services/attraction.service';
import { Attraction } from 'src/app/model/attraction';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss']
})
export class AttractionsComponent implements OnInit {
  attractions: Attraction[];
  pagedAttractions: Attraction[];
  paginator: { page: number, itemsPerPage: number } = { page: 0, itemsPerPage: 1 };
  constructor(private router: Router, private attractionService: AttractionService) { }

  ngOnInit() {
    this.initData();
    this.paginator.page = 0;
    this.paginate();
  }

  initData() {
    this.attractions = this.attractionService.attractions;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.paginator.page = 0;
    this.paginate();
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
    if (!this.attractions) { return false; }
    return this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage < this.attractions.length;
  }

  previousExists() {
    if (!this.attractions) { return false; }
    return (this.paginator.page - 1) * this.paginator.itemsPerPage + this.paginator.itemsPerPage > 0;
  }

  paginate() {
    this.pagedAttractions = this.attractions.slice(
      this.paginator.page * this.paginator.itemsPerPage,
      this.paginator.page * this.paginator.itemsPerPage + this.paginator.itemsPerPage
    );
  }

  attraction(a: any) {
    this.router.navigate(['attraction', a.id]);
  }

}
