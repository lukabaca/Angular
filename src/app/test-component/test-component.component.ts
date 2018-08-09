import { Component, OnInit } from '@angular/core';
import { Person } from '../Model/Person';
import {PersonService} from '../Service/person.service';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  person: Person;

  people: Person [];

  onSelect(person: Person): void {
    this.person = person;
  }

  //ponizej przez parametr od razu tworzy prywatne pole personService, injection
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPerson();
    this.getPeople();
  }

  getPerson(): void {
    this.person = this.personService.getPerson();
  }
  getPeople(): void {
    this.personService.getPeople().subscribe(people => this.people = people);
  }
}

