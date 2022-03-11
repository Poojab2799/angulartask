import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  url = "http://localhost:3000/users"
  constructor(private http:HttpClient) { }
  //get data
  users() {
    return this.http.get(this.url)
  }
  //post data
  saveUser(data: any) {
    return this.http.post(this.url, data);
  }
  //delete data
  deleteUser(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }

 
}
