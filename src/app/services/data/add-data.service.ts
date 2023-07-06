import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  constructor() { }

  addData(data: any) {
    console.log(data);
  }
}
