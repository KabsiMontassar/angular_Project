import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: any[] = []; // Replace 'any' with your apartment model

  constructor() { }

  ngOnInit(): void {
    this.loadApartments();
  }

  loadApartments(): void {
    // Logic to load apartments from a service or API
  }
}