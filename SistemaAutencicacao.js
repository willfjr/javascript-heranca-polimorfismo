export class SistemaAutencicacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}