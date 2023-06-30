import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();


  birthday = new Date(1998, 7, 2);
  FormBuilder: any;
  validInput : boolean = true
  itemForm!:FormGroup
  submitted = false

  constructor( private formbuilder : FormBuilder) { }

  ngOnInit(): void {

    this.itemForm = this.formbuilder.group({
      item:['', [Validators.required, Validators.minLength(5)]]
    })

  }

  addHero(newHero: string) {
    if(newHero.length<=5)
    {
      // alert('please give correct item')
    }
    if (newHero) {
      this.newItemEvent.emit(newHero);
    }
  }
  submit(){
    this.submitted = true
   if(this.itemForm.invalid){
    return
   }
   alert('success')
  }

  // addItem(){
  //   this.newItemEvent.emit(this.item.value);
  // }
}
