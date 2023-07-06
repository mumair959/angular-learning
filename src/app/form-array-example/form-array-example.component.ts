import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Item {
  title: string;
  completed: boolean;
  priority: number;
}

@Component({
  selector: 'form-array-example',
  templateUrl: 'form-array-example.component.html',
  styleUrls: ['form-array-example.component.css']
})
export class FormArrayExampleComponent {

  constructor(private fb: FormBuilder) {}
  prio = [0, 1, 2];
  ToDoListForm!: FormGroup;
  itemsList: Item[] = [];

  defaultItem = {
    title: '',
    completed: false,
    priority: null,
  };

  get itemsArray() {
    return <FormArray>this.ToDoListForm.get('items');
  }

  ngOnInit(): void {
    this.ToDoListForm = this.fb.group({
      items: this.fb.array([]),
    });
    // this.itemsList = this.serv.getmyData();
    this.displayItems();
  }

  createItem(item: any) {
    return this.fb.group({
      title: [item.title, [Validators.required]],
      completed: [item.completed, [Validators.required]],
      priority: [item.priority, [Validators.required]],
    });
  }

  addNewItem() {
    let formGroup = this.createItem(this.defaultItem);
    this.itemsArray.push(formGroup);
  }

  displayItems() {
    let transformedItems = this.itemsList.map((item: any) =>
      this.createItem(item)
    );
    console.log(transformedItems);
    this.ToDoListForm.setControl('items', this.fb.array(transformedItems));
  }
  deleteItem(i: number) {
    this.itemsArray.removeAt(i);
  }

  deleteAll() {
    this.itemsArray.clear();
  }

  track(item: any, index: number) {
    return index;
  }
}
