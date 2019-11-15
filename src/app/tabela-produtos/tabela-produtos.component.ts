import { Component, OnInit, OnChanges } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { ProdutoApiService } from '../ProdutoApiService';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit,OnChanges {
  titulo = "Tabela de Produtos";
  preco: number;
  produtos: Produto[] = [];


  constructor(
    //private produtoService: ProdutoService
    private produtoApiService: ProdutoApiService
    ) { }

  ngOnInit() {
    //this.produtos = this.produtoService.listar()
    this.produtoApiService.listar().subscribe(
      data => this.produtos = data,
      error => alert("Error" +error)
    )
    ;
  }

  ngOnChanges(){
    console.log("Atualizando lista");
    this.produtoApiService.listar().subscribe(
      data => this.produtos = data,
      error => alert("Error" +error)
    );
  }

  /*deletar(id: number){
    this.produtoService.deletar(id);
  }
*/

}
