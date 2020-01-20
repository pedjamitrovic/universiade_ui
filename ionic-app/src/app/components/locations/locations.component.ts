import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LocationService } from 'src/app/services/location.service';
import { Location } from 'src/app/model/location';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;

  accomodation: Location;
  restaurant: Location;

  constructor(private router: Router, private userService: UserService, private locationService: LocationService, private message: MessageService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initData();
    this.mapInitializer();
  }

  initData() {
    this.accomodation = this.locationService.getLocation(this.userService.user.accomodation);
    this.restaurant = this.locationService.getLocation(this.userService.user.restaurant);
  }

  mapInitializer() {
    let mapCenter = new google.maps.LatLng((this.accomodation.lat + this.restaurant.lat) / 2, (this.accomodation.lng + this.restaurant.lng) / 2)

    let mapOptions: google.maps.MapOptions = {
      center: mapCenter,
      zoom: 14
    };

    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

    this.initMarkers();
  }

  initMarkers() {
    let accomodationMarker = new google.maps.Marker({
      position: new google.maps.LatLng(this.accomodation.lat, this.accomodation.lng),
      animation: google.maps.Animation.DROP,
      map: this.map,
      icon: {
        url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless2_hdpi.png',
        scaledSize: new google.maps.Size(27, 43),
        labelOrigin: new google.maps.Point(13, -15)
      },
      label: {
        color: 'white',
        text: this.accomodation.name,
        fontWeight: 'bold',
        fontSize: '16px'
      }
    });
    accomodationMarker.addListener('click', () => this.location(accomodationMarker.getLabel().text));

    let restaurantMarker = new google.maps.Marker({
      position: new google.maps.LatLng(this.restaurant.lat, this.restaurant.lng),
      animation: google.maps.Animation.DROP,
      map: this.map,
      icon: {
        url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless2_hdpi.png',
        scaledSize: new google.maps.Size(27, 43),
        labelOrigin: new google.maps.Point(13, -15)
      },
      label: {
        color: 'white',
        text: this.restaurant.name,
        fontWeight: 'bold',
        fontSize: '16px'
      }
    });
    restaurantMarker.addListener('click', () => this.location(restaurantMarker.getLabel().text));
  }

  location(label: any) {
    if (this.accomodation.name === label) {
      this.router.navigate(['location', this.accomodation.id]);
    }
    else if (this.restaurant.name === label) {
      this.router.navigate(['location', this.restaurant.id]);
    }
    else {
      this.message.error('Unexpected error happened');
    }
  }

}
