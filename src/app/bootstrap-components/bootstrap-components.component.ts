import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bootstrap-components',
  templateUrl: './bootstrap-components.component.html',
  styleUrls: ['./bootstrap-components.component.css']
})
export class BootstrapComponentsComponent {
    mytime: Date = new Date();
    modalRef?: BsModalRef;

    constructor(private modalService: BsModalService) {}
  
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
}
