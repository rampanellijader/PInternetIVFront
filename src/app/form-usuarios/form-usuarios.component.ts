import { Component, OnInit } from '@angular/core';
import { UsuarioApiService } from '../UsuarioApiService';
import { Usuario } from '../usuario';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {
 titulo = 'Formulário de Usuarios';
 usuario = new Usuario();
 id: number;


  constructor(private apiService: UsuarioApiService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.apiService.buscarPorId(this.id).subscribe(res => {
        this.usuario = res;
        console.log(this.usuario)
      },  err => {
        console.log("Erro" +err);
      })
  }

  else {
    console.log("não tem id");
    this.usuario = new Usuario();
  }

}

salvarUsuario(){
  if(this.id) {
    this.apiService.editar(this.id, this.usuario).subscribe( res =>{
      console.log(this.usuario);
      this.router.navigate(['/tabelaUsuario']);
    }, err =>{
      console.error("Erro" +err);
    })
  }

  else {
    this.apiService.adicionar(this.usuario).subscribe(res =>{
      alert(this.usuario.nome + " Cadastrado com sucesso");
      this.router.navigate(['/tabelaUsuario'])
    }, err =>{
      alert("Erro" +err);
    })
  }
}

cancelar() {
  this.router.navigate(['/tabelaUsuario']);
}

}
