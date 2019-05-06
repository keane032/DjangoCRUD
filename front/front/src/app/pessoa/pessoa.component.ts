import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PessoaService } from '../services/pessoa-service.service';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent{

  pessoas:Pessoa[] = []

  constructor(private pessoaservi:PessoaService){
    this.getAll()
  }

  getAll(){
    this.pessoaservi.listar().subscribe(
      (res:Pessoa[]) => {
        this.pessoas = res
      }
    )
  }

  adicionar(nome,endereco,idade){
    let pessoa = new Pessoa()
    pessoa.nome = nome
    pessoa.endereco = endereco
    pessoa.idade = idade
    this.pessoaservi.adicionar(pessoa).subscribe(
      (res:Pessoa) => {
        console.log(res)
        this.getAll()
      }
    )
  }

}
