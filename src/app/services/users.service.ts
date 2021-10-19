import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_FLASK = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(`${this.API_FLASK}/users`)
  }

  getUser(id: string) {
    return this.http.get(`${this.API_FLASK}/users/${id}`)
  }

  createUser(user: User) {
    return this.http.post(`${this.API_FLASK}/users`, user)
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_FLASK}/users/${id}`)
  }

  updateUser(id: any, user: User) {
    return this.http.put(`${this.API_FLASK}/users/${id}`, user)
  }

  uploadFile(archivo: File) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.API_FLASK}/upload`, archivo, {headers});
  }


}
