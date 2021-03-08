import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarProdutoComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
