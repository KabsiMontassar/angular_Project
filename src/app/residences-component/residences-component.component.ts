import {Component, OnInit} from '@angular/core';
import {Residence} from "../core/models/residence.model";

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent implements OnInit {

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/img.png", status: "Disponible"},
    {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
  ];

  address: string = "";
  showAdress: boolean = false;
  id!: number;
  favoris:Residence[] = [];
  get filteredResidences() {
    return this.listResidences.filter(res =>
      res.address.toLowerCase().includes(this.address.toLowerCase())
    );
  }

  ngOnInit(): void {

    }


  getColor(status: string) {
    return status === 'Disponible' ? 'green' : 'red';
  }

  getLocation(r: Residence) {
    if (r.address === 'inconnu') {
      alert('L\'adresse de cette résidence est inconnue.');
    } else {
      alert(`Adresse : ${r.address}`);
    }
  }

  addFavoris(r: Residence) {
    this.favoris.push(r)
    alert("added to favoris")
  }
}
