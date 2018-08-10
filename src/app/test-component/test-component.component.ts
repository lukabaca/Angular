import { Component, OnInit } from '@angular/core';
import { Person } from '../Model/Person';
import {PersonService} from '../Service/person.service';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  people: Person [];
  person: Person;

  // ponizej przez parametr od razu tworzy prywatne pole personService, injection
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPeople();
  }

  getPerson(id: number): void {
    this.personService.getPerson(id).subscribe(person => this.person = person);
  }
  getPeople(): void {
    this.personService.getPeople().subscribe(people => this.people = people);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.personService.addHero({ name } as Person)
      .subscribe(person => {
        this.people.push(person);
      });
  }

  delete(person: Person): void {
    this.people = this.people.filter(h => h !== person);
    this.personService.deleteHero(person).subscribe();
  }
}

