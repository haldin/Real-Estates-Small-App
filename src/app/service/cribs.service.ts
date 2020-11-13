import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class CribsService {

  constructor(private http:HttpClient) { }
  public newCribSubject = new Subject<any>();
    getAllCribs(){
   return this.http.get('data/cribs.json')

  }
  addCrib(data){
    this.newCribSubject.next(data);
    data.image = 'defaut-crib';
  }

}
