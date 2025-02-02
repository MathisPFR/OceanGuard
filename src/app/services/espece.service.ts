import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espece, CreateEspece, UpdateEspece } from './espece.model';

@Injectable({
  providedIn: 'root'
})
export class EspeceService {
  private API = "http://localhost:3000/especes";
  private http = inject(HttpClient);

  getEspeces(): Observable<Espece[]> {
    return this.http.get<Espece[]>(this.API);
  }

  getEspeceById(id: string): Observable<Espece> {
    return this.http.get<Espece>(`${this.API}/${id}`);
  }

  createEspece(espece: CreateEspece): Observable<Espece> {
    return this.http.post<Espece>(this.API, espece);
  }

  updateEspece(id: string, espece: UpdateEspece): Observable<Espece> {
    return this.http.put<Espece>(`${this.API}/${id}`, espece);
  }

  deleteEspece(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
} 