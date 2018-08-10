import { Injectable } from '@angular/core';
import { Person } from '../Model/Person';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private peopleUrl = 'api/people';  // URL to web api
  // tutaj nazwa po api/ to jest nazwa kolekcji w in-memory-data-service (w tym przypadku people)
  private person: Person;


  private people: Person[];

  constructor(private messageService: MessageService, private http: HttpClient) {
    // this.person = new Person(2,'jan', 'kowalski');
  }


  getPerson(id: number): Observable<Person> {

    const url = `${this.peopleUrl}/${id}`;
    return this.http.get<Person>(url).pipe(

      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
    // return of(this.people.find(person => person.id === id));
  }

  getPeople(): Observable<Person []> {
    this.messageService.add('PersonService: people');
    return this.http.get<Person[]>(this.peopleUrl)
      .pipe(
        catchError(this.handleError('getPeople', []))
      );
    // return of(this.people);
  }

  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }


  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** POST: add a new hero to the server */
  addPerson (person: Person): Observable<Person> {
    return this.http.post<Person>(this.peopleUrl, person, httpOptions).pipe(
      // tap((person: Person) => this.log(`added hero w/ id=${person.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  updatePerson (person: Person): Observable<Person> {
    return this.http.put(this.peopleUrl, person, httpOptions).pipe(
      // tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }


  /** DELETE: delete the hero from the server */
  deletePerson (person: Person | number): Observable<Person> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.peopleUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      // tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

}
