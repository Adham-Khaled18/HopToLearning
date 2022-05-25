import { Injectable } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { from, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.authi);

  constructor(private authi: Auth) { }
  login(username:string, password:string){
    return from(signInWithEmailAndPassword(this.authi,username,password));
  }

  logout() {
    return from(this.authi.signOut());
  }
  signup(name: string , email: string , password:string){
    return from(createUserWithEmailAndPassword(this.authi,email,password)
    ).pipe(switchMap(({user}) => updateProfile(user,{displayName: name})))
    
  }
}
