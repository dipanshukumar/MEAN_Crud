import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  user: User;
  private baseurl: String = 'http://localhost:8080';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor( private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(this.baseurl + '/create', user, {headers: this.headers});
  }

  readUsers() {
    return this.http.get(this.baseurl + '/read', {headers: this.headers});
  }

  editUser(user: User) {
    return this.http.put(this.baseurl + '/update', user, {headers: this.headers});
  }

  deleteUser(_id) {
    return this.http.delete(this.baseurl + '/delete/' + _id, {headers: this.headers});
  }

  setter(user: User) {
    this.user = user;
  }

  getter() {
    return this.user;
  }
}
