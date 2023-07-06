import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddDataComponent } from './add-data/add-data.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouteParamsComponent } from './route-params/route-params.component';
import { BootstrapComponentsComponent } from './bootstrap-components/bootstrap-components.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';
import { ThirdPartyLibraryComponent } from './third-party-library/third-party-library.component';
import { QuillModule } from 'ngx-quill';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { ToastrModule } from 'ngx-toastr';
import { ToastComponent } from './toast/toast.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    AngularDirectiveComponent,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    RouteParamsComponent,
    BootstrapComponentsComponent,
    PipesComponent,
    CustomPipe,
    ThirdPartyLibraryComponent,
    FileUploadComponent,
    ToastComponent,
    DynamicFormComponent,
    FormArrayExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ImageCropperModule,
    FormsModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    RouterModule.forRoot([
      {path: 'add-data', component: AddDataComponent},
      {path: 'bootstrap-components', component: BootstrapComponentsComponent},
      {path: 'angular-directive', component: AngularDirectiveComponent},
      {path: 'data-binding', component: DataBindingComponent},
      {path: 'route-params/:id', component: RouteParamsComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'third-party-library', component: ThirdPartyLibraryComponent},
      {path: 'file-upload', component: FileUploadComponent},
      {path: 'toast', component: ToastComponent},
      {path: 'dynamic-form', component: DynamicFormComponent},
      {path: 'form-array-example', component: FormArrayExampleComponent}
    ]),
    TooltipModule.forRoot(),
    TranslateModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    QuillModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
