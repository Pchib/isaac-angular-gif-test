import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  private apiKey = 'PThtYIlJcYWclGK89wKGqwadWmOOLNIv';
  private query: string;

  constructor(private http: HttpClient) {}

  getGifs() {
    
    
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${this.query}&limit=50&offset=0&rating=G&lang=en`);
    

  }


  searchGifs(query: string) {
    this.query = query;
  }
}
