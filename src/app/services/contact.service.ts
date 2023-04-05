import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Demandeur } from '../model/Demandeur';
import { Observable } from 'rxjs';
export class message 
{
  constructor ( public mesage :string){}
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactUrl = "http://127.0.0.1:8000/api/auth";


  constructor(private http: HttpClient) {}
  
create (demandeur :Demandeur ):Observable<any>
{
  console.log ("sevice done ",demandeur);
return this.http.post(this.contactUrl+"/user/add" ,demandeur);
}

getcontact(): Observable<Demandeur[]> {
  return this.http.get<Demandeur[]>(this.contactUrl+"/user");
}

deletecontact(id: number): Observable<Demandeur>{
  return this.http.delete<Demandeur>(`${this.contactUrl}/user/delete/{id}`);
}

findcontactById(id: number): Observable<Demandeur>{
  return this.http.get<Demandeur>(`${this.contactUrl}/user/find/{id}`);
}



}
