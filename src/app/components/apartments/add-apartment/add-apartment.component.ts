import { Component } from '@angular/core';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartment = {
    name: '',
    address: '',
    price: null,
    residenceId: null
  };

  addApartment() {
    // Logic to add the apartment
    console.log('Apartment added:', this.apartment);
  }
}