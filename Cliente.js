export class Cliente{
    senha;
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = this.senha;
    }
    autenticar(){
        return true;
    }
}