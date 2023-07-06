import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.css']
})
export class RouteParamsComponent {
  protected id: number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.id = Number(this.route.snapshot.params['id'])
  }
}
