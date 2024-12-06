import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as L from 'leaflet';
import { ZmpService } from '../../services/zmp.service';
import { Zmp } from '../../services/zmp.model';


@Component({
  selector: 'app-map',
  imports: [RouterOutlet],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  constructor(private zmpService: ZmpService) {} 

  ngAfterViewInit(): void {
    this.initMap();
    this.loadZmpMarkers(); 
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [50.1109, 10.7458], 
      zoom: 2
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  private loadZmpMarkers(): void {
    this.zmpService.getZmp().subscribe({
      next: (zmpList: Zmp[]) => {
        zmpList.forEach((zmp) => {
          const coordinates = zmp.location.geo.coordinates;
          const marker = L.marker([coordinates[0], coordinates[1]], {
            icon: L.icon({
              iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
              shadowSize: [41, 41]
            })
          });
          marker
            .bindPopup(`<b>${zmp.nom}</b><br>Superficie : ${zmp.superficie} km²`)
            .addTo(this.map);
        });
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des ZMP :', err);
      }
    });
  }
}
