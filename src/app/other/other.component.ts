import { Component, OnInit } from '@angular/core';
import {Person} from '../Model/Person';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

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
    this.people.push(this.person);
  }

  constructor() {
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
