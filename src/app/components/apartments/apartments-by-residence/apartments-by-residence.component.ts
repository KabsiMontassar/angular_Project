import { Component, OnInit } from '@angular/core';
import { Apartment } from '../../core/models/apartment.model';
import { Residence } from '../../core/models/residence.model';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  residence!: Residence;
  apartments: Apartment[] = [];

  constructor() { }

  ngOnInit(): void {
    // Logic to fetch apartments based on the selected residence
  }

  // Additional methods to handle apartment-related functionality can be added here
}