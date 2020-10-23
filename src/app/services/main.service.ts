import { Injectable } from '@angular/core';
import { Trip } from "src/app/interfaces/flights-interface";
import { TripsArr } from "src/app/services/tripsArr";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  public trips: Trip[] = TripsArr

  public filteredTrips: Trip[];

  public messege: string;
  
// Filter by all inputs included or separated
  public filter = (form) => {
    if(form.from && form.to && form.depart && form.return && form.maxPrice && form.minPrice && form.connections === '2+') {
      this.filteredTrips = this.trips.filter(flight => flight.from.toLowerCase() === form.from.toLowerCase() && flight.to.toLowerCase() === form.to.toLowerCase() && flight.date.split(' - ')[0] === form.depart && flight.date.split(' - ')[1] === form.return && flight.price <= form.maxPrice && flight.price >= form.minPrice && flight.departFlights.length >= 2);
      if(!this.filteredTrips.length) {
        this.messege = 'There are no matching flights'
      }
      console.log(this.filteredTrips)
    }
    else if(form.from && form.to && form.depart && form.return && form.maxPrice && form.minPrice && form.connections) {
      this.filteredTrips = this.trips.filter(flight => flight.from.toLowerCase() === form.from.toLowerCase() && flight.to.toLowerCase() === form.to.toLowerCase() && flight.date.split(' - ')[0] === form.depart && flight.date.split(' - ')[1] === form.return && flight.price <= form.maxPrice && flight.price >= form.minPrice && flight.departFlights.length === +form.connections +1);
      if(!this.filteredTrips.length) {
        this.messege = 'There are no matching flights'
      }
      console.log(this.filteredTrips)

    }
    else if(form.from && form.to && form.depart && form.return && form.maxPrice && form.minPrice) {
      this.filteredTrips = this.trips.filter(flight => flight.from.toLowerCase() === form.from.toLowerCase() && flight.to.toLowerCase() === form.to.toLowerCase() && flight.date.split(' - ')[0] === form.depart && flight.date.split(' - ')[1] === form.return && flight.price <= form.maxPrice && flight.price >= form.minPrice);
      if(!this.filteredTrips.length) {
        this.messege = 'There are no matching flights'
      }
    }
    else if (form.from && form.to && form.depart && form.return) {
      this.filteredTrips = this.trips.filter(flight => flight.from.toLowerCase() === form.from.toLowerCase() && flight.to.toLowerCase() === form.to.toLowerCase() && flight.date.split(' - ')[0] === form.depart && flight.date.split(' - ')[1] === form.return);
      if(!this.filteredTrips.length) {
        this.messege = 'There are no matching flights'
      }
    }
    else if (form.from && form.to && form.connections === '2+') {
      this.filteredTrips = this.trips.filter(flight => flight.from.toLowerCase() === form.from.toLowerCase() && flight.to.toLowerCase() === form.to.toLowerCase() && flight.departFlights.length >= 2);
      if(!this.filteredTrips.length) {
        this.messege = 'There are no matching flights'
      }
    }
    else if (form.from && form.to) {
      this.filteredTrips = this.trips.filter(flight => flight.from.toLowerCase() === form.from.toLowerCase() && flight.to.toLowerCase() === form.to.toLowerCase());
      if(!this.filteredTrips.length) {
        this.messege = 'There are no matching flights'
      }
    }
    else if (form.maxPrice && form.minPrice) {
      this.filteredTrips = this.trips.filter(flight => flight.price <= form.maxPrice && flight.price >= form.minPrice);
      if(!this.filteredTrips.length) {
        this.messege = 'There are no matching flights'
      }
    }
    else if (form.depart && form.return) {
      this.filteredTrips = this.trips.filter(flight => flight.date.split(' - ')[0] === form.depart && flight.date.split(' - ')[1] === form.return);
      if(!this.filteredTrips.length) {
        this.messege = 'There are no matching flights'
      }
    }

    return this.filteredTrips;
  }
}
