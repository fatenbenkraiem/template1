import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class userservice {

    private userUrl = "http://127.0.0.1:8080/api";

    constructor(
      private http: HttpClient
    ) { }

    edituser(user :User): Observable<User>
    {
        return this.http.post<User>(this.userUrl+"/useredit",user);
    }
    getuser(username:String): Observable<User> {
      return this.http.get<User>(`${this.userUrl }/findbyusername${username}`);
      } 
    
   
}
