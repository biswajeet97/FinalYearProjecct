import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  

  url = 'http://localhost:3000/'
  constructor(private http : HttpClient) { }
  registerUser(data){
    return this.http.post(`${this.url}api/register`, data)
  }
  loginUser(data){
    return this.http.post(`${this.url}api/login`,data)
  }
  showFriends(data){
    return this.http.post(`${this.url}api/friends`,data)
  }
  addFriends(data){
    return this.http.post(`${this.url}api/acceptInvite`,data)
  }
  findFriends(data){
    return this.http.post(`${this.url}api/findFriend`,data)
  }
  getUser(){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${localStorage.getItem('token')}`)
    return this.http.get(`${this.url}profile`,{headers : headers})
  }
}
