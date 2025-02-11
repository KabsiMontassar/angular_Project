import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../../../core/models/residence.model';
import { ResidenceService } from '../../../core/services/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence!: Residence;

  constructor(
    private route: ActivatedRoute,
    private residenceService: ResidenceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.residence = this.residenceService.getResidenceById(+id);
    }
  }

  addToFavorites() {
    this.residenceService.addToFavorites(this.residence);
    alert('Added to favorites');
  }

  updateResidence() {
    // Logic for updating the residence
  }
}