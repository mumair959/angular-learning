import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent{
  dateToday: string;

  name: string;

  constructor() {
    this.dateToday = new Date().toDateString();

    this.name = "AngularLearning"
  }

}
