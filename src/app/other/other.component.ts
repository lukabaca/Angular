import { Component, OnInit } from '@angular/core';
import {Person} from '../Model/Person';
import {FormControl} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  personForm = this.formBuilder.group({

    name: ['', Validators.required],
    surname: [''],

});


  clickMsg = '';
  person: Person;
  people: Person[] = [];

  submitted = false;

  genders = {
    men: 'Men',
    women: 'Women'
  };


  onSubmit() {
    this.submitted = true;
    console.warn(this.personForm.value);
    // this.people.push(this.person);
  }

  constructor(private formBuilder: FormBuilder) {
    // this.person = new Person(1, 'a', 'b');
  }

  ngOnInit() {
  }

  onClickMe() {

  }


  get diagnostic() { return JSON.stringify(this.person); }

  newPerson() {
    this.person = new Person(1, '', '');

  }
}
