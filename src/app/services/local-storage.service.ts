import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getItem = (key:string) : string | null =>  localStorage.getItem(key);

  public setItem = (key: string, value: string): void  => localStorage.setItem(key,value);

  public clearAll = (): void => localStorage.clear();

  public getKey = (index:number) : string | null  => localStorage.key(index);

  public removeItem = (key:string) : void => localStorage.removeItem(key);


}
