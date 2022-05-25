import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authi: Auth) { }
  login(username:string, password:string){
    return from(signInWithEmailAndPassword(this.authi,username,password));
  }

  logout() {
    return from(this.authi.signOut());
  }
}
