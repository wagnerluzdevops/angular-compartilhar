import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  produtos = [{
    nome: 'Mochila Adidas',
    descricao: 'Ideal para uso no dia a dia, a Mochila Adidas oferece comodidade para você.',
    },{
    nome: 'Tênis Rainha',
    descricao: 'Ideal para uso no dia a dia, indicado para corridas.',
    }];

    recebeProduto(produto: { nome: string, descricao: string }) {
      this.produtos.push({
        nome: produto.nome,
        descricao: produto.descricao
      })
    }


}
