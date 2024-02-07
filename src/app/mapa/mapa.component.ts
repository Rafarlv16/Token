import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  map: L.Map | undefined;
  zoomControl: L.Control.Zoom | undefined; // Agregamos una referencia a zoomControl

  ngOnInit(): void {
    // Crea una instancia del mapa en el elemento con ID 'map'
    this.map = L.map('map').setView([-36.84853	,174.76349], 15);

    // Agrega un proveedor de mapas, por ejemplo, OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Agregamos el control de zoom y verificamos que no sea 'undefined'
    if (this.map) {
      this.zoomControl = L.control.zoom({ position: 'topright' });
      this.zoomControl.addTo(this.map);
    }
  }
}
