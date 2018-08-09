import { Injectable } from '@angular/core';
import { Person } from '../Model/Person';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  private person: Person;

  private people: Person[] = [
        { name: 'Narco', surname: '' },
        { name: 'Mr. Nice', surname: '' },
        { name: 'Bombasto', surname: '' },
        { name: 'Celeritas', surname: '' },
        { name: 'Magneta', surname: '' },
        { name: 'RubberMan', surname: '' },
        { name: 'Dynama', surname: '' },
        { name: 'Dr IQ', surname: '' },
        { name: 'Magma', surname: '' },
        { name: 'Tornado', surname: '' }
    ];
  constructor(private messageService: MessageService) {
    this.person = new Person('jan', 'kowalski');
  }


  getPerson(): Person {
    return this.person;
  }

  getPeople(): Observable<Person []> {
    this.messageService.add('PersonService: people');
    return of(this.people);
  }

}
