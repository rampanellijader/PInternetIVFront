import { LoginComponent } from './login/login.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { TabelaUsuariosComponent } from './tabela-usuarios/tabela-usuarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';

const appRoutes: Routes = [
  { path: "tabela", component: TabelaProdutosComponent },
  { path: "novo", component: FormProdutosComponent },
  { path: "edit/:id", component: FormProdutosComponent},
  { path: "", redirectTo:"login", pathMatch:'full' },


  { path: "tabelaUsuario", component: TabelaUsuariosComponent },
  { path: "editUsuario/:id", component: FormUsuariosComponent },
  { path: "novoUsuario", component: FormUsuariosComponent },
  { path: "login", component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
