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

    name: ['', Validators.required],
    surname: [''],
    aliases: this.formBuilder.array([
        this.formBuilder.control('')
      ])
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

    console.warn(this.personForm.value.name);
    console.warn(this.personForm.value.surname);

    const name = this.personForm.value.name;
    const surname = this.personForm.value.surname;

    this.person = new Person(1, name, surname);

    this.people.push(this.person);

    this.personForm.reset();
  }

  constructor(private formBuilder: FormBuilder) {
    // this.person = new Person(1, 'a', 'b');
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
    this.person = new Person(1, '', '');

  }
}
