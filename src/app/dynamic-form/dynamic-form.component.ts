import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AddProductService } from '../services/product/add-product.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  protected addProductForm!: FormGroup;
  protected addVariantForm!: FormGroup;
  protected submitted = false;

  constructor(private addProductService: AddProductService, private fb: FormBuilder) { 

  }

  ngOnInit(): void {
    this.addProductForm = this.fb.group(
      {
        name: new FormControl("", Validators.required),
        description: new FormControl("", [Validators.required])
      }
    );

    this.addVariantForm = this.fb.group(
      {
        variants: this.fb.array([])
      }
    );
  }

  protected get addProductFormControl() {
    return this.addProductForm.controls;
  }

  protected get addVariantFormControl() {
    return this.addVariantForm.controls["variants"];
  }

  get variants() {
    return this.addVariantForm.controls["variants"] as FormArray;
  }

  addVariant() {
    const variantForm = this.fb.group({
        color: ['', Validators.required],
        size: ['', Validators.required],
        price: ['', Validators.required],
    });
  
    this.variants.push(variantForm);
  }

  deleteVariant(vaiantIndex: number) {
    this.variants.removeAt(vaiantIndex);
  }

  protected onSubmit(): void {
    this.submitted = true;

    if (this.addProductForm.valid && this.addVariantForm.valid) {
      console.log("Form Submitted succesfully.");
      this.addProductService.addProduct(this.addProductForm.value,this.addVariantForm.value);
    }
    else{
      console.log("Form Data Invalid");
    }
  }
}
