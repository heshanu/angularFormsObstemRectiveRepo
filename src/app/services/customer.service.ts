import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) {
  }

  //insert data to databse
  create(customer: any): Observable<any> {
    return this.http.post(`${environment.baseAPIUrl}/customer.json`, customer);
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.baseAPIUrl}/customer.json`)
      .pipe(
        map((res) => {
          const customers: any[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              customers.push({...res[key], id: key});
            }
          }
          return customers;
        })
      );
  }

  update(customer: any, id: string): Observable<any> {
    return this.http.put(`${environment.baseAPIUrl}/customer/${id}.json`, customer);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${environment.baseAPIUrl}/customer/${id}.json`);
  }

}
