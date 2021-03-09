import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent implements OnInit {

  @Output() produtoCriado = new EventEmitter<{ nome: string, descricao: string }>();
  // @Output() formValue = new EventEmitter();

  form: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      novoProduto: this.fb.control(null),
      descricaoNovoProduto: this.fb.control(null),
    });
  }

  criarProduto() {
    // console.log(this.form.value);
    // this.produtoCriado.emit(this.form.value)
    // console.log('Novo Produto Form: ' + this.form.get('novoProduto').value);
    this.produtoCriado.emit({
      nome: this.form.get('novoProduto').value,
      descricao: this.form.get('descricaoNovoProduto').value
    })
  }


}
