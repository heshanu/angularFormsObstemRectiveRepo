import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseAPIUrl: string = 'https://angularfirebase-e579d-default-rtdb.asia-southeast1.firebasedatabase.app/';

  constructor(private http: HttpClient) {
  }

  //insert data to databse
  create(customer: any): Observable<any> {
    return this.http.post(`${this.baseAPIUrl}/customer.json`, customer);
  }

  getAll():Observable<any>{
    return this.http.get(`${this.baseAPIUrl}/customer.json`)
      .pipe(
        map((res)=>{
          const customers:any[]=[];
          for (const key in res) {
            if(res.hasOwnProperty(key)){
              customers.push({...res[key],id:key});
            }
          }
          return customers;
        })
      );
  }

  delete(customer:any):Observable<any>{
    return this.http.delete(`${this.baseAPIUrl}/customer.json`, customer);
  }

}
