import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authentication(username: string, password: string): boolean {
    if (username === "Lalit" && password === "Lalit@18045759") {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      alert("Invalid username and password");
      return false;
    }
  }
}
