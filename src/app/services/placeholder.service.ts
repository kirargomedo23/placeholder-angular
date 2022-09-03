import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResourceI } from '../interfaces/resource.interface';

type ResourcePlaceholder =  'comments' | 'photos' | 'todos' | 'users';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private endpoint = environment.endpoint;


  constructor(private http: HttpClient) { }


  public create(resouce:ResourcePlaceholder, obj : ResourceI): Observable<any>  {
    return this.http.post(`${this.endpoint}/${resouce}` , obj );
  }

  public getList(resouce:ResourcePlaceholder) : Observable<any> {
    return this.http.get(`${this.endpoint}/${resouce}`);
  }

  public getById(resouce:ResourcePlaceholder, id: number ): Observable<any> {
    return this.http.get(`${this.endpoint}/${resouce}/${id}`);
  }

  public updateById(resouce:ResourcePlaceholder, id:number, body: ResourceI ): Observable<any> {
    return this.http.patch( `${this.endpoint}/${resouce}/${id}`, body );
  }

  public deleteById(resouce:ResourcePlaceholder, id:number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${resouce}/${id}`);
  }

}
