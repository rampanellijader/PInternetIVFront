import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Produto } from "./Produto";

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

adicionar(produto: Produto): Observable<Produto>{
  return this.http.post<Produto>(apiUrl,produto,httpOptions).pipe(
    tap(prod => console.log(prod)),
    catchError(this.handleError('Adicionar Produto',null))
  )

}

buscarPorId(id: number): Observable<Produto> {
  const url = `${apiUrl}/${id}`;
  return this.http.get<Produto>(url).pipe(
    tap(_ => console.log(`buscarPorId Produto id=${id}`)),
    catchError(this.handleError<Produto>(`buscarPorId id=${id}`))
  );
}

deletar (id) {
  const url = `${apiUrl}/${id}`;
    return this.http.delete(url);
}


editar (id, produto): Observable<any> {
  const url = `${apiUrl}/${id}`;
  return this.http.put(url, produto, httpOptions);
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
