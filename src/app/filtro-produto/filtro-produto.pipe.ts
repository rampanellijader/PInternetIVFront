import { Produto } from './../produto';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filtroProduto',
  pure: false
})
export class FiltroProdutoPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valor?:string): Produto[] {

    const nome = valor ? valor : null;
    return listaProdutos.filter(
      (produto) => produto.nome = nome
    );
  }



}
