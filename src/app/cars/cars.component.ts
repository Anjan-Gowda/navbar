import { Component, OnInit } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: any = data;
  constructor() {}

  ngOnInit() {}
}
