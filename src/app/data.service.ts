import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getExperience() {
    return this.http.get('./assets/experience.json')
  }

  getBasics() {
    //return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get('./assets/aboutme.json')
  }

}
