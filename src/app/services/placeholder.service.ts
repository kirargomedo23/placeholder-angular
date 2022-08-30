import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

type ResourcePlaceholder =  'comments' | 'photos' | 'todos' | 'users';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private endpoint = environment.endpoint;


  constructor(private http: HttpClient) { }


  public getList(resouce:ResourcePlaceholder) {
    return this.http.get(`${this.endpoint}/${resouce}`);
  }

  public getById(resouce:ResourcePlaceholder, id: number ){
    return this.http.get(`${this.endpoint}/${resouce}/${id}`);
  }

}
