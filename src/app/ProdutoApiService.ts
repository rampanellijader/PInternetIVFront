import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from './produto';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/produtos";

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {

  constructor(private http: HttpClient) { }



listar(): Observable<Produto[]> {
  return this.http.get<Produto[]>(apiUrl).pipe(
    tap(produtos => console.log("Produtos", produtos)),
    catchError(this.handleError('listar Produtos', []))

  );

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