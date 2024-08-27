import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docloging',
  templateUrl: './docloging.component.html',
  styleUrls: ['./docloging.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class DoclogingComponent {
  username: string = "";
  password: string = "";

  inValidLogin = false;

  constructor(private router: Router, private docauth: DocauthService) { }

  checkLogin() {
    if (this.docauth.authentication(this.username, this.password)) {
      this.router.navigate(['/docdas']);
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
      alert("Invalid username and password");
      this.router.navigate(['/home']);
    }
  }
}
