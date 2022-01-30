import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL: any
  constructor(private http: HttpClient) { 
    this.ROOT_URL = ''
  }
  get(uri: string, headers: HttpHeaders): Observable<any> {
    return  this.http.get(`${this.ROOT_URL}/${uri}`, {headers})
   }

   post(uri: string, payload: Object, headers: HttpHeaders) {
    //
      return this.http.post(`${this.ROOT_URL}${uri}`, payload, { headers})
  }
}
