import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { AlertService } from './alert.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  titulo = "Login";
  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  //  this.authService.logout();

  //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /*

  fazerLogin() {
    this.loading = true;
    this.authService.fazerLogin(this.model.nome, this.model.senha)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
*/





  fazerLogin(){
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);

  }

}
