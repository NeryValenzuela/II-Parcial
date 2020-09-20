import { Router } from '@angular/router';
import { SecurityService } from './services/security.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'security';

  constructor(private security: SecurityService,
    private routes : Router
    ){

  }
  logedIn(){
    return this.security.logedIn();
  }
  onlogout(){
    this.security.logout();
    this.routes.navigate(['login']);
  }






}
