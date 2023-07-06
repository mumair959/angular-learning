import { Component } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-third-party-library',
  templateUrl: './third-party-library.component.html',
  styleUrls: ['./third-party-library.component.css']
})
export class ThirdPartyLibraryComponent {
  date: string = '';
  phone: string = '1234567890';
  imageChangedEvent: any = '';
  croppedImage: any = '';

  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;

  constructor(translate: TranslateService) {
    const date = moment();
    this.date = date.format('DD-MM-YYYY');

    translate.addLangs(['en', 'klingon']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
}
