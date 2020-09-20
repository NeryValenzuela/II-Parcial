import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    nombre: '',
    password: ''
  }

  constructor(
    private security: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.security.login(this.user).subscribe(
    (res) => {

      localStorage.setItem('token', res.token);
      this.router.navigate(['clientes']);
    }, (err)    => {
      console.log(err);
    }
    );
  }
}
