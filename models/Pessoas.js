class Pessoa {

    constructor(id, nome, cep, estado, cidade, rua, bairro, numero, telefone, peso, altura, probSaude) {
        this.id = id
        this.nome = nome
        this.cep = cep
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.bairro = bairro
        this.numero = numero
        this.telefone = telefone
        this.peso = peso
        this.altura = altura
        this.probSaude = probSaude
    }

    get getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getCep() {
        return this.cep;
    }
    set setCep(cep) {
        this.cep = cep;
    }
    get getEstado() {
        return this.estado;
    }
    set setEstado(estado) {
        this.estado = estado;
    }
    get getCidade() {
        return this.cidade;
    }
    set setCidade(cidade) {
        this.cidade = cidade;
    }
    get getRua() {
        return this.rua;
    }
    set setRua(rua) {
        this.rua = rua;
    }
    get getBairro() {
        return this.bairro;
    }
    set setBairro(bairro) {
        this.bairro = bairro;
    }
    get getNumero() {
        return this.numero;
    }
    set setNumero(numero) {
        this.numero = numero;
    }
    get getTelefone() {
        return this.telefone;
    }
    set setTelefone(telefone) {
        this.telefone = telefone;
    }
    get getPeso() {
        return this.peso;
    }
    set setPeso(peso) {
        this.peso = peso;
    }
    get getAltura() {
        return this.altura;
    }
    set setAltura(altura) {
        this.altura = altura;
    }
    get getProbSaude() {
        return this.probSaude;
    }
    set setProbSaude(probSaude) {
        this.probSaude = probSaude;
    }



}