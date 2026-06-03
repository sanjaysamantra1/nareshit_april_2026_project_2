import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpClient = inject(HttpClient);

  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  getUserById(id: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
