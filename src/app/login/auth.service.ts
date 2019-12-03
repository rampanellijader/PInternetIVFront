import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';


@Injectable()
export class AuthService {

  /*constructor(private router: Router) { }

  fazerLogin(nome: string, senha: string) {
    return this.http.post<any>('http://localhost:3000/api/usuarios', { nome: nome, senha: senha })
        .map(usuario => {

            if (usuario && usuario.token) {

                localStorage.setItem('currentUser', JSON.stringify(usuario));
            }

            return usuario  ;
        });
}

//    '/api/authenticate'          'http://localhost:3000/api/usuarios'

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}

*/

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'user' &&
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/tabela']);

    } else {
      this.usuarioAutenticado = false;

      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }



}
