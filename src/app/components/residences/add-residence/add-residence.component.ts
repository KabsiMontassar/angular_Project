import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residence = {
    id: null,
    name: '',
    address: '',
    image: '',
    status: 'Disponible'
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Logic to add or update the residence
    // This could involve calling a service to save the residence data
    alert('Residence added/updated successfully!');
    this.router.navigate(['/residences']);
  }
}