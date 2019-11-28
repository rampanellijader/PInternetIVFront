import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from "./Produto";

@Pipe({
  name: 'filtroPreco',
  pure: false
})
export class FiltroPrecoPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valor?:number): Produto[] {
    const preco = valor ? valor : 0;
    return listaProdutos.filter(
      (produto) => produto.preco > preco
    );
  }

}
