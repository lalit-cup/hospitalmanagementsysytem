import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v1"
  // private baseUrl1="http://localhost:8080/api/v1/insert"


  getPatientList():Observable<Patient[]>{
      return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  deletePatient(id:number):Observable<Object[]>{
    return this.httpClient.delete<Patient[]>(`${this.baseUrl}/${id}`);

  }

  createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseUrl}/insert`, patient);
  }

  updatePatientById(id: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`, patient);
  }


}
