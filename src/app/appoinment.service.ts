import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoinment } from './appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v2"
  private insertUrl = "http://localhost:8080/api/v2/insert";
  // private deleteUrl = "http://localhost:8080/api/v2/id"

  getAllAppoinments():Observable<Appoinment[]>{
    return this.httpClient.get<Appoinment[]>(`${this.baseUrl}`);
  }
  createAppoinment(appoinment:Appoinment):Observable<Appoinment[]>{
    return this.httpClient.post<Appoinment[]>(`${this.insertUrl}`,appoinment);
  }

  deleteAppoinment(id:number):Observable<Object[]>{
    return this.httpClient.delete<Appoinment[]>(`${this.baseUrl}/${id}`);

  }

}
