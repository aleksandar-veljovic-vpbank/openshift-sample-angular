import { Component } from '@angular/core';

import { persons } from './person';
import { PersonService } from './person.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons = persons;
  title = 'openshift-sample-angular';
  
  constructor(private personService: PersonService) { }
  
  ngOnInit(): void {
	this.personService.getPersonHandlerSubscriber().subscribe(p => {
	  this.persons = p;
	});
  }
}
