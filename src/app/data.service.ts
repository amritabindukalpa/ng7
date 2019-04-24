import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiClient: HttpClient ) { }

  getUsers() {
    return this.apiClient.get('https://reqres.in/api/users');
  }
}
