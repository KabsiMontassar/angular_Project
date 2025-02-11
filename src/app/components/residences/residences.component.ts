import { Component, OnInit } from '@angular/core';
import { Residence } from '../../core/models/residence.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/img.png', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getColor(status: string) {
    return status === 'Disponible' ? 'green' : 'red';
  }

  navigateToDetails(residence: Residence) {
    // Logic to navigate to residence details
  }

  navigateToApartments(residence: Residence) {
    // Logic to navigate to apartments by residence
  }
}