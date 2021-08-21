import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  listFilter = 'Patel';

  employee1 = [
    {
      id: 1,
      name: 'Akshay Patel'
    },
    {
      id: 2,
      name: 'Panth Patel'
    }
  ];
}
