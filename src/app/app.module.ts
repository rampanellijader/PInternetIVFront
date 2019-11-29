import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';
import { ProdutoService } from './produto.service';
import { MoedaPipe } from './moeda.pipe';
import { FiltroPrecoPipe } from './filtro-preco.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { TabelaUsuariosComponent } from './tabela-usuarios/tabela-usuarios.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaProdutosComponent,
    FormProdutosComponent,
    MoedaPipe,
    FiltroPrecoPipe,
    FormUsuariosComponent,
    TabelaUsuariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ProdutoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
