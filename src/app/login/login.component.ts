import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo = "Login";
  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);

  }

}
