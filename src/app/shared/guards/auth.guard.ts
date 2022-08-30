import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    
    canActivate( route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean  {
        throw new Error('Method not implemented.');
    }

}