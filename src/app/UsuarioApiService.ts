import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "http://localhost:3000/api/usuarios";

@Injectable({
    providedIn: 'root'
})



export class UsuarioApiService {
    constructor(private http: HttpClient) { }


    listar(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(apiUrl).pipe(
            tap(usuarios => console.log("Usuarios", usuarios)),
            catchError(this.handleError('listar Usuarios', []))
        );
    }

    adicionar(usuario: Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(apiUrl,usuario, httpOptions).pipe(
            tap(user => console.log(user)),
            catchError(this.handleError('Adicionar Usuario', null))
        )
    }

buscarPorId(id:number): Observable<Usuario> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Usuario>(url).pipe(
        tap(_ => console.log(`buscar por Id Usuario id=${id}`))
    );
}

deletar (id) {
    const url = `${apiUrl}/${id}`;
      return this.http.delete(url);
  }
  

  editar (id, usuario): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, usuario, httpOptions);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
