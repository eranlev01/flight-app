import { Component, OnInit } from '@angular/core';
import { MainService } from "src/app/services/main.service";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  constructor(public _mainService: MainService) { }

  ngOnInit(): void {
  }

}
