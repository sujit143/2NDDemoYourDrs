import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlpatient: string = 'https://2e2405c1.ngrok.io/api/Schedular/GetScheduleappointmentMatcingPatients?FirstName=';

  constructor(private _http: HttpClient) { }

  getPatient(fname) {
    return this._http.get(this.urlpatient + fname);
}
}
