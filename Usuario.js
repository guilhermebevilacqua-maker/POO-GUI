// classe
// Enum
const Genero = Object.freeze( {
    M:"M",
    F:"F",
    OUTRO:"Outro"
})
class Usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;
    // metodo construtor
    construtor(id, nome, senha, dataNascimento, genero, isAdmin){
        this.id = id;
        this.nome = nome;
        this.senha = senha;
        this.dataNascimento = new Date (dataNascimento);
        this.genero = genero;
        this.isAdmin = false;
    }
}

const user1 = new Ususrio (1, "Guilherme Alves", "123", "2000-08-24T00:00:00", )