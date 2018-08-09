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
        { id: 1, name: 'Narco', surname: 'gdgfdgfdgf' },
        { id: 2, name: 'Mr. Nice', surname: '' },
        { id: 3, name: 'Bombasto', surname: '' },
        { id: 4, name: 'Celeritas', surname: '' },
        { id: 5, name: 'Magneta', surname: '' },
        { id: 6, name: 'RubberMan', surname: '' },
        { id: 7, name: 'Dynama', surname: '' },
        { id: 8, name: 'Dr IQ', surname: '' },
        { id: 9, name: 'Magma', surname: '' },
        { id: 10, name: 'Tornado', surname: '' }
    ];
  constructor(private messageService: MessageService) {
    this.person = new Person(2,'jan', 'kowalski');
  }


  getPerson(id: number): Observable<Person> {
    return of(this.people.find(person => person.id === id));
  }

  getPeople(): Observable<Person []> {
    this.messageService.add('PersonService: people');
    return of(this.people);
  }

}
