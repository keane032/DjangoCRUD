import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private Http:HttpClient) { }

  listar(){
    return this.Http.get("http://localhost:8000/pessoas/")
  }

  adicionar(pessoa:Pessoa){
    return this.Http.post("http://localhost:8000/pessoas/",{
      nome:pessoa.nome,
      endereco:pessoa.endereco,
      idade:pessoa.idade
    })
  }

  deletar(id){
    return this.Http.delete("http://localhost:8000/pessoas/"+id)
  }

  update(pessoa:Pessoa){
    return this.Http.put("http://localhost:8000/pessoas/"+pessoa.id,{
      nome:pessoa.nome,
      endereco:pessoa.endereco,
      idade:pessoa.idade
    });
  }

}

