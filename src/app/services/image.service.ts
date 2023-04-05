import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imagesUrl = "http://127.0.0.1:8080/api";

  constructor(
    private http: HttpClient,
  ) { }

 
  saveImage(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(this.imagesUrl+"/imageupload", formData, { observe: 'response' } );
  }
}
