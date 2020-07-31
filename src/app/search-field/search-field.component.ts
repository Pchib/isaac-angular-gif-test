import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';
import {SharedService} from '../shared.service'

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    gifs: any;
    searchQuery: string;
    notFound = false;
    name = 'Search Field';
    message : string;

    constructor(private service: AllService, private sharedservice : SharedService ) {
    }
    ngOnInit(){
      this.sharedservice.sharedMessage.subscribe(message => this.message = message)
    }
    searchGifs(){
        this.service.searchGifs(this.searchQuery);
        this.service.getGifs()
        .subscribe(results => {
          console.log(results['data']);
          this.gifs = results['data'];
           this.sharedservice.nextMessage(results['data'])
           console.log(this.message)
           
        }, error => {
          alert('not found : (');
        });
        this.searchQuery = '';
      }
}
