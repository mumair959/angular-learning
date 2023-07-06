import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AddDataService } from '../services/data/add-data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})

export class AddDataComponent implements OnInit {
    protected newDataForm!: FormGroup;
    protected submitted = false;

    constructor(private addDataService: AddDataService, private fb: FormBuilder) { 

    }

    ngOnInit(): void {
      this.newDataForm = this.fb.group(
        {
          title: new FormControl("", Validators.required),
          message: new FormControl("", [Validators.required]),
        }
      );
    }

    protected get newDataFormControl() {
      return this.newDataForm.controls;
    }

   protected onSubmit(): void {
    this.submitted = true;

    if (this.newDataForm.valid) {
      console.log("Form Submitted succesfully.");
      this.addDataService.addData(this.newDataForm.value);
    }
  }
}
