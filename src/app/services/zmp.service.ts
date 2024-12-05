import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zmp } from './zmp.model';

@Injectable({
  providedIn: 'root'
})
export class ZmpService {

API = "http://localhost:3000/zmp"
private http = inject(HttpClient)

getZmp(): Observable<Zmp[]>{
  return this.http.get<Zmp[]>(this.API);
}
}
