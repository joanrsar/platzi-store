import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReturnStatement } from '@angular/compiler';

import {tap} from 'rxjs/operators';
import { TokenService } from '../token.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private aF: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  createUser(email: string, password: string) {
    return this.aF.auth.createUserWithEmailAndPassword(email, password);
  }

  login( email: string, password: string){
    return this.aF.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.aF.auth.signOut();
  }

  hasUser() {
    return this.aF.authState;
  }

  loginRequestApi( email: string, password: string ) {
    return this.http.post('https://platzi-store.herokuapp.com/auth',{
      email,
      password
    })
    .pipe(
      tap((data: {token: string} ) => {
        const token = data.token;
        this.tokenService.saveToken(token);
      })
    )
    ;
  }

}
