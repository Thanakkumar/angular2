import {Component } from '@angular/core';

import { Authentication } from './authentication';
import {Router} from '@angular/router';
;

@Component({
 selector: 'logout',
   template: `<a href="#" (click)="onlogout()">logout</a>
   `
  
 
})

export class Logout{
 
error:boolean;
// CanActivate()
// {this.auth.isLoggedin();

// }
constructor(private auth:Authentication,private router:Router) {
  }
onlogout(){
   this.auth.logout()
   .subscribe(

     (token:any) => {
                       this.router.navigate(['/login']); },
     () => {this.error=true;}
     );
   }
   
}