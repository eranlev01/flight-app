import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainService } from "src/app/services/main.service";
import { Trip } from 'src/app/interfaces/flights-interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(public _mainService: MainService, public _fb: FormBuilder) { }

  form: FormGroup
  sortedBycon: Trip[];
  sortedByDur: any[];
  radio: string = ''
  connections: string[] = ['0', '1', '2+'];
  today = new Date().toISOString().split('T')[0];

  ngOnInit(): void {
    this.form = this._fb.group({
      from: [""],
      to: [""],
      depart: [""],
      return: [""],
      minPrice: [],
      maxPrice: [],
      connections: []
    })
  }
//Submit search form
  public sub = () => {
    this.form.setValue({...this.form.value, connections: this.radio})
    this._mainService.filter(this.form.value)
  }
// Sorting by connections length
  public sortByCon = () => {
    this.sortedBycon = this._mainService.filteredTrips.sort((a, b) => (a.departFlights.length > b.departFlights.length) ? 1 : -1)
  }
// Sorting by duration
  public sortByDur = () => {
    this.sortedByDur = this._mainService.filteredTrips.sort((a, b) => (a.departDur() + a.returnDur() > b.departDur() + b.returnDur()) ? 1 : -1)
  }

}
