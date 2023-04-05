import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ActualiteRes } from '../model/actualite-res';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamenevcService {

  private examenEvcUrl = "http://127.0.0.1:8080/api";

  constructor( private http: HttpClient) { }
 
  getoffresAll(): Observable<ActualiteRes[]> {
    return this.http.get<ActualiteRes[]>(this.examenEvcUrl+"/offresall");
  }

  createActualite(actualite: ActualiteRes): Observable<ActualiteRes>{

    return this.http.post<ActualiteRes>(`${this.examenEvcUrl}` + `/offresnew`, actualite);
    //return this.http.post<ActualiteEvc>(this.examenEvcUrl+"/offresnew", actualite);
  }

 deleteActualite(id: number): Observable<ActualiteRes>{
    return this.http.delete<ActualiteRes>(`${this.examenEvcUrl}/offresdelete${id}`);
  }
  
  findActualiteById(id: number): Observable<ActualiteRes>{
    return this.http.get<ActualiteRes>(`${this.examenEvcUrl}/offresfind${id}`);
  }
}
