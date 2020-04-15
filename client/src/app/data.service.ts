import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  insertUser(userObj)
  {
    return this.http.post("http://localhost:8080/user/insert", userObj);
  }

  showUsers()
  {
    return this.http.get("http://localhost:8080/user/show");
  }

  getSingleUser(id)
  {
    return this.http.post("http://localhost:8080/user/singleUser",id);
  }

  deleteUser(id)
  {
    return this.http.post("http://localhost:8080/user/deleteUser",id);
  }
  update(user)
  {
    return this.http.post("http://localhost:8080/user/update",user);
  }
}
// http://localhost:8080/user/show
// deleteUser