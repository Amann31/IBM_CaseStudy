import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = "http://localhost:9090";

  constructor(private http: HttpClient) { }

  getTaskList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }

  createTask(task: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, task);
  }

  getTask(uniqueTaskId:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${uniqueTaskId}`);
  }

  deleteTask(uniqueTaskId:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${uniqueTaskId}}`);
  }

  updateTask(uniqueTaskId:number, value:any) : Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${uniqueTaskId}`,value);
  }
}
