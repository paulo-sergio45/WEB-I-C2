class ListaPessoas {

    constructor() {

        this.listaPessoas = [];

    }

    
    setPessoas(Pessoa) {

        this.listaPessoas.push(Pessoa);

    }

    get getPessoas() {

        return this.listaPessoas;

    }

}