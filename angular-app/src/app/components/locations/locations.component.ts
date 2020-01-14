import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;

  hotel: any = {
    lat: 44.824623,
    lng: 20.399805,
    label: 'Studentski grad'
  };

  restaurant: any = {
    lat: 44.824022,
    lng: 20.402407,
    label: 'Mesara Momčilo'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    let mapCenter = new google.maps.LatLng((this.hotel.lat + this.restaurant.lat) / 2, (this.hotel.lng + this.restaurant.lng) / 2)

    let mapOptions: google.maps.MapOptions = {
      center: mapCenter,
      zoom: 16
    };

    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);

    this.initMarkers();
  }

  initMarkers() {
    let marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.hotel.lat, this.hotel.lng),
      animation: google.maps.Animation.DROP,
      map: this.map,
      icon: {
        url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless2_hdpi.png',
        scaledSize: new google.maps.Size(27, 43),
        labelOrigin: new google.maps.Point(13, -15)
      },
      label: {
        color: 'white',
        text: this.hotel.label,
        fontWeight: 'bold',
        fontSize: '16px'
      }
    });
    marker.addListener('click', () => this.location(marker.getLabel().text));

    marker = new google.maps.Marker({
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
        text: this.restaurant.label,
        fontWeight: 'bold',
        fontSize: '16px'
      }
    });
    marker.addListener('click', () => this.location(marker.getLabel().text));
  }

  location(label: any) {
    console.log(label);
    this.router.navigate(['location', 1]);
  }

}
