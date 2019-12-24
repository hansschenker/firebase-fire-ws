import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, from } from "rxjs";

@Injectable()
export class AuthApiService {
  constructor(private afAuth: AngularFireAuth) {}

  async signUp(email: string, password: string): Promise<any> {
    return await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }
  signIn() {}
  signOut() {}
}
