import { Component, OnInit, OnChanges } from '@angular/core';
import { UsuarioApiService } from '../UsuarioApiService';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-usuarios',
  templateUrl: './tabela-usuarios.component.html',
  styleUrls: ['./tabela-usuarios.component.css']
})
export class TabelaUsuariosComponent implements OnInit, OnChanges {
  titulo = "Tabela de Usuarios";
  usuarios: Usuario[] = [];

  constructor(
    private usuarioApiService: UsuarioApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listar();
  }
  ngOnChanges(){
    console.log("Atualizando lista");
    this.listar();
  }

  listar(){
    this.usuarioApiService.listar().subscribe(
      data => this.usuarios = data,
      error => alert("Erro" +error)
    );
  }

  deletar(id: number){
    this.usuarioApiService.deletar(id).subscribe(res =>{
      console.log(res);
      this.router.navigate(['/tabelaUsuario']);
      this.listar();
    }, err =>{
      console.log("Erro" +err);
    })
  }

}
