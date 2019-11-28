import { Component, OnInit, OnChanges } from '@angular/core';
import { Produto } from "../Produto";
import { ProdutoService } from '../produto.service';
import { ProdutoApiService } from '../ProdutoApiService';
import { Router } from '@angular/router';

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
    private produtoApiService: ProdutoApiService,
    private router: Router
    ) { }

  ngOnInit() {
    //this.produtos = this.produtoService.listar()
    this.listar();

  }

  ngOnChanges(){
    console.log("Atualizando lista");
    this.listar();
  }


  listar(){
    this.produtoApiService.listar().subscribe(
      data => this.produtos = data,
      error => alert("Error "+error)
    );
  }

  deletar(id: number){
    //this.produtoService.deletar(id);
    this.produtoApiService.deletar(id).subscribe(res => {
      console.log(res);
      this.router.navigate(['/tabela']);
      this.listar();

    }, err => {
      console.error("Erro: "+err);
    });
  }


}
