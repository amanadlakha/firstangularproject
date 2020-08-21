import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 

  }
  getCountryData(){
    
    this.http.get('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-abbreviation.json').subscribe(data=>{
    console.log(data)
 })
  }

  getData(){
 
    return [
      {
        "name":"Aman",
        "points":50
      },
      {
        "name":"Akshay",
        "points":90
      },
      {
        "name":"Ankit",
        "points":80
      }
      ]
  }

}
