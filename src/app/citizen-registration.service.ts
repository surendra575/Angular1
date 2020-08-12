import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitizenRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user)
  {
    return this.http.post("http://localhost:8020/ssnEnroll",user,
    {responseType:'text' as 'json'}
  );
  }
}
