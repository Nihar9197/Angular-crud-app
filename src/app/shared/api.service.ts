import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postEmployee(data: any) {
    return this.http.post<any>('http://localhost:7000', data).pipe(map((res:any) => {
      return res;
    }));
  }

  getEmployee() {
    return this.http.get<any>('http://localhost:7000/users').pipe(map((res:any) => {
      return res;
    }));
  }

  updateEmployee(data: any, id: number) {
    
    return this.http.put<any>('http://localhost:7000/'+id,data).pipe(map((res:any) => {
      return res;
    }));
  }

  deleteEmployee(id: number) {
    return this.http.delete<any>('http://localhost:7000/'+id).pipe(map((res:any) => {
      console.log("delete res is :  ", res)
      return res;
    }));
  }
}
