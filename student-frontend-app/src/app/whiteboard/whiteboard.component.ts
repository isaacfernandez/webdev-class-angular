import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})

export class WhiteboardComponent implements OnInit {

  loggedIn;
  sections = [];

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient) {
  }

  ngOnInit() {
    this.service.checkIfLoggedIn()
      .then(response => {
        return response.json()
      }).then( resp =>
      this.loggedIn = resp);


  }


}
