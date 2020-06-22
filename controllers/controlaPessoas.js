
class ControlaPessoas {
    constructor() {

        this.pessoa = new Pessoa();
        this.listaPessoas = new ListaPessoas();
        this.exibePessoa = new ExibePessoa();
        this.cont = 0;

        this.$ = document.querySelector.bind(document)

        this.nome = this.$("input#nome")
        this.cep = this.$("input#cep")
        this.estado = this.$("input#estado")
        this.cidade = this.$("input#cidade")
        this.rua = this.$("input#rua")
        this.bairro = this.$("input#bairro")
        this.numero = this.$("input#numero")
        this.telefone = this.$("input#celular")
        this.peso = this.$("input#peso")
        this.altura = this.$("input#altura")

        this.vet1 = document.querySelectorAll("input.saude1")
        this.saude = [];

        this.id2 = this.$("input#ide");
        this.nome2 = this.$("input#nomee");
        this.cep2 = this.$("input#cepe");
        this.estado2 = this.$("input#estadoe");
        this.cidade2 = this.$("input#cidadee");
        this.rua2 = this.$("input#ruae");
        this.bairro2 = this.$("input#bairroe");
        this.numero2 = this.$("input#numeroe");
        this.telefone2 = this.$("input#telefonee");
        this.peso2 = this.$("input#pesoe");
        this.altura2 = this.$("input#alturae");


        this.saude2 = [];
        this.vet2 = document.querySelectorAll("input.saude2")


    }

    NovaPessoa(event) {
        event.preventDefault();
        this.saude = [];
        for (let i = 0; i < this.vet1.length; ++i) {
            if (this.vet1[i].checked === true) {
                this.saude[i] = this.vet1[i].value;
            }
        }
        this.saude = this.saude.filter(function (elem) {
            return elem != null;
        });
        
        let pessoa = this.criaPessoa();
        this.listaPessoas.setPessoas(pessoa); 
        this.exibePessoa.manipulaPessoa(pessoa);


    }
    criaPessoa() {
        this.cont++;
        return new Pessoa(
            this.cont,
            this.nome.value,
            this.cep.value,
            this.estado.value,
            this.cidade.value,
            this.rua.value,
            this.bairro.value,
            this.numero.value,
            this.telefone.value,
            this.peso.value,
            this.altura.value,
            this.saude);

    }

    editaPessoas(id) {
        this.exibePessoa.editaPessoa(this.listaPessoas.getPessoas[id - 1])

    }


    alteraPessoa(event) {
        event.preventDefault();
        this.saude2 = [];
        for (let i = 0; i < this.vet2.length; ++i) {
            if (this.vet2[i].checked === true) {
                this.saude2[i] = this.vet2[i].value;
            }
        }
        this.saude2 = this.saude2.filter(function (elem) {
            return elem != null;
        });
        
        for (let i = 0; i < this.listaPessoas.getPessoas.length; ++i) {
            if (this.listaPessoas.getPessoas[i].id == this.id2.value) {

                this.listaPessoas.getPessoas[i].nome = this.nome2.value
                this.listaPessoas.getPessoas[i].cep = this.cep2.value
                this.listaPessoas.getPessoas[i].estado = this.estado2.value
                this.listaPessoas.getPessoas[i].cidade = this.cidade2.value
                this.listaPessoas.getPessoas[i].rua = this.rua2.value
                this.listaPessoas.getPessoas[i].bairro = this.bairro2.value
                this.listaPessoas.getPessoas[i].numero = this.numero2.value
                this.listaPessoas.getPessoas[i].telefone = this.telefone2.value
                this.listaPessoas.getPessoas[i].peso = this.peso2.value
                this.listaPessoas.getPessoas[i].altura = this.altura2.value
                this.listaPessoas.getPessoas[i].probSaude = this.saude2
                this.exibePessoa.atualizaPessoa(this.listaPessoas.getPessoas[i])
                break;
            }
        }
        
    }

    deletaPessoas(id) {
        let url = new URL(window.location.href);

        url.searchParams.append('id', id);

        url.searchParams.set('id', id);


        window.history.pushState({}, document.title, url);
    }
    deletaPessoa() {
        let url = new URL(window.location.href);

        let id = url.searchParams.get("id");

        document.querySelector("tr#tr" + id).remove();

        url.searchParams.delete('id');

        window.history.pushState({}, document.title, url);

        removePessoas(id)
    }
    removePessoas(id) {
        let pessoa = this.listaPessoas.getPessoas;
        for (let i = 0; i < pessoa.length; ++i) {
            if (pessoa[i].id == id) {
                pessoa[i] = null;
            }
        } pessoa = pessoa.filter(function (elem) {
            return elem != null;
        });
    }
    visializarPessoas(id) {
        this.exibePessoa.visializarPessoa(this.listaPessoas.getPessoas[id - 1])
    }

}