import { Component, OnInit } from '@angular/core';
import {Person} from '../Model/Person';
import {FormControl} from '@angular/forms';
import { FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {


  personForm = this.formBuilder.group({

    name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    surname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
    gender: ['', Validators.required],
    aliases: this.formBuilder.array([
        this.formBuilder.control('')
      ])
});

  person_validation_messages = {

    'name': [
      {type: 'required', message: 'Name is required'},
      {type: 'minlength', message: 'Name must be at least 3 characters'},
      {type: 'pattern', message: 'Name must only contain letters'}
    ],
    'surname': [
      {type: 'required', message: 'Surname is required'},
      {type: 'minlength', message: 'Surname must be at least 3 characters'},
      {type: 'pattern', message: 'Surname must only contain letters'}
    ]
  };



  clickMsg = '';
  person: Person;
  people: Person[] = [];

  requiredFieldsMsg = '';

  submitted = false;

  genders = {
    men: 'Men',
    woman: 'Woman'
  };


  onSubmit() {

    // console.warn(this.personForm.value.name);
    // console.warn(this.personForm.value.surname);

    if (this.personForm.valid) {

      this.requiredFieldsMsg = '';
      this.submitted = true;

      const name = this.personForm.value.name;
      const surname = this.personForm.value.surname;
      const gender = this.personForm.value.gender;

      this.person = new Person(1, name, surname, gender);

      this.people.push(this.person);

      this.personForm.reset();
    } else {
      this.requiredFieldsMsg = 'Prosze wypelnic wszystkie pola';
    }

  }

  constructor(private formBuilder: FormBuilder) {

    // this.person = new Person(1, 'a', 'b');
  }

  get name() {
    return this.personForm.get('name').touched;
   // return this.personForm.valid;
  }


  ngOnInit() {
  }

  onClickMe() {

  }


  get diagnostic() { return JSON.stringify(this.person); }

  get aliases() {
    return this.personForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  newPerson() {
    this.person = new Person(1, '', '', '');

  }
}
