import {Component, OnInit} from '@angular/core';
import {Person} from '../Model/Person';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../Service/person.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person: Person;

  constructor(private route: ActivatedRoute,
              private personService: PersonService,
              private location: Location)
  {
      //this.person = new Person(90,'jan', 'kowalski');
  }


  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {

    const id = +this.route.snapshot.paramMap.get('id');

    this.personService.getPerson(id).subscribe(person => this.person = person);

  }

}
