
import { AuthGuard } from './guards/auth.guard';
import { CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { TabelaUsuariosComponent } from './tabela-usuarios/tabela-usuarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';

const appRoutes: Routes = [
  { path: "tabela", component: TabelaProdutosComponent, canActivate:[AuthGuard]},
  { path: "novo", component: FormProdutosComponent, canActivate:[AuthGuard]},
  { path: "edit/:id", component: FormProdutosComponent, canActivate:[AuthGuard]},
  { path: "", redirectTo:"login", pathMatch:'full' },


  { path: "tabelaUsuario", component: TabelaUsuariosComponent, canActivate:[AuthGuard] },
  { path: "editUsuario/:id", component: FormUsuariosComponent, canActivate:[AuthGuard] },
  { path: "novoUsuario", component: FormUsuariosComponent, canActivate:[AuthGuard]},
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
