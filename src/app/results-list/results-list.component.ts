import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from '../shared.service'


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  message : string;

  constructor( private sharedservice : SharedService) { }

  ngOnInit() {
    this.sharedservice.sharedMessage.subscribe(message => this.message = message)

  }

}
