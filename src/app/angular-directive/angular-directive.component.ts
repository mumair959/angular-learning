import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directive',
  templateUrl: './angular-directive.component.html',
  styleUrls: ['./angular-directive.component.css']
})
export class AngularDirectiveComponent {
  protected languages = ['PHP','JS','Python','Java'];
}
