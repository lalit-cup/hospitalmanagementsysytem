import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private baseURL = "http://localhost:8080/api/v3";

  constructor(private httpClient: HttpClient) { }

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseURL}`);
  }

  createMedicines(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(`${this.baseURL}/insert`, medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseURL}/${id}`);

  }

  updateMedicineById(id:number, medicine:Medicine):Observable<Object>{
    return this.httpClient.put<Medicine>(`${this.baseURL}/${id}`, medicine);
  }

  delete(id:number):Observable<Object>{
    return this.httpClient.delete<Medicine>(`${this.baseURL}/${id}`);
  }
}
