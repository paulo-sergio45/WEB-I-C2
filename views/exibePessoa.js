
class ExibePessoa {
    constructor() {
        this.$ = document.querySelector.bind(document)
    }

    manipulaPessoa(pessoa) {
        let tabela = this.$("tbody#tabpessoa");
        let tr = document.createElement("tr");
        tr.setAttribute("id", "tr" + pessoa.id);

        tr.innerHTML = `
<td>${pessoa.nome}</td>
<td>${pessoa.estado}</td>
<td>${pessoa.cidade}</td>
<td>${pessoa.bairro}</td>
<td>${pessoa.telefone}</td>
<td>

<a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-teal  modal-trigger" href="#modal1" id="edit"> <i class="material-icons teal-text text-accent-2 " onClick=controlaPessoas.editaPessoas(${pessoa.id})>edit</i></a>
<a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-red  modal-trigger" href="#modal2" id="delete" > <i class="material-icons  red-text text-accent-2 " onClick=controlaPessoas.deletaPessoas(${pessoa.id})>delete</i></a>
<a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-blue  modal-trigger" href="#modal3" id="visibility"> <i class="material-icons blue-text text-accent-2" onClick=controlaPessoas.visializarPessoas(${pessoa.id})>visibility</i></a></td>
`;
        tabela.insertBefore(tr, null);

    }

    atualizaPessoa(pessoa) {
        let tr = this.$("tr#tr" + pessoa.id);
        tr.innerHTML = `
    <td>${pessoa.nome}</td>
    <td>${pessoa.estado}</td>
    <td>${pessoa.cidade}</td>
    <td>${pessoa.bairro}</td>
    <td>${pessoa.telefone}</td>
    <td>
    
    <a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-teal  modal-trigger" href="#modal1" id="edit"> <i class="material-icons teal-text text-accent-2 " onClick=controlaPessoas.editaPessoas(${pessoa.id})>edit</i></a>
    <a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-red  modal-trigger" href="#modal2" id="delete" > <i class="material-icons  red-text text-accent-2 " onClick=controlaPessoas.deletaPessoas(${pessoa.id})>delete</i></a>
    <a class="btn  btn-floating transparent z-depth-0 waves-effect  waves-blue  modal-trigger" href="#modal3" id="visibility"> <i class="material-icons blue-text text-accent-2" onClick=controlaPessoas.visializarPessoas(${pessoa.id})>visibility</i></a></td>
    `;
        tabela.insertBefore(tr, null);
    }


    editaPessoa(pessoa) {
        this.$("#ide").value = pessoa.id
        this.$("#nomee").value = pessoa.nome
        this.$("#cepe").value = pessoa.cep
        this.$("#estadoe").value = pessoa.estado
        this.$("#cidadee").value = pessoa.cidade
        this.$("#ruae").value = pessoa.rua
        this.$("#bairroe").value = pessoa.bairro
        this.$("#numeroe").value = pessoa.numero
        this.$("#telefonee").value = pessoa.telefone
        this.$("#pesoe").value = pessoa.peso
        this.$("#alturae").value = pessoa.altura

        this.$("#saude1").checked = false;
        this.$("#saude2").checked = false;
        this.$("#saude3").checked = false;
        this.$("#saude4").checked = false;
        this.$("#saude5").checked = false;
        this.$("#saude6").checked = false;
        this.$("#saude7").checked = false;
        this.$("#saude8").checked = false;
        this.$("#saude9").checked = false;
        this.$("#saude10").checked = false;
        this.$("#saude11").checked = false;
        this.$("#saude12").checked = false;
        this.$("#saude13").checked = false;
        this.$("#saude14").checked = false;

        for (let i = 0; i < pessoa.probSaude.length; i++) {

            switch (pessoa.probSaude[i]) {
                case "1":
                    this.$("#saude1").checked = true;
                    break;
                case "2":
                    this.$("#saude2").checked = true;
                    break;
                case "3":
                    this.$("#saude3").checked = true;
                    break;
                case "4":
                    this.$("#saude4").checked = true;
                    break;
                case "5":
                    this.$("#saude5").checked = true;
                    break;
                case "6":
                    this.$("#saude6").checked = true;
                    break;
                case "7":
                    this.$("#saude7").checked = true;
                    break;
                case "8":
                    this.$("#saude8").checked = true;
                    break;
                case "9":
                    this.$("#saude9").checked = true;
                    break;
                case "10":
                    this.$("#saude10").checked = true;
                    break;
                case "11":
                    this.$("#saude11").checked = true;
                    break;
                case "12":
                    this.$("#saude12").checked = true;
                    break;
                case "13":
                    this.$("#saude13").checked = true;
                    break;
                case "14":
                    this.$("#saude14").checked = true;
                    break;

                default:

            }
        }


    }
    visializarPessoa(pessoa) {

        this.$("P#idv").innerHTML = pessoa.id
        this.$("P#nomev").innerHTML = pessoa.nome
        this.$("P#cepv").innerHTML = pessoa.cep
        this.$("P#estadov").innerHTML = pessoa.estado
        this.$("P#cidadev").innerHTML = pessoa.cidade
        this.$("P#ruav").innerHTML = pessoa.rua
        this.$("P#bairrov").innerHTML = pessoa.bairro
        this.$("P#numerov").innerHTML = pessoa.numero
        this.$("P#telefonev").innerHTML = pessoa.telefone
        this.$("P#pesov").innerHTML = pessoa.peso
        this.$("P#alturav").innerHTML = pessoa.altura
        let texto = " ";
        let textos = " ";

        for (let i = 0; i < pessoa.probSaude.length; i++) {

            switch (pessoa.probSaude[i]) {
                case "1":
                    textos = texto.concat("<br> Pessoas idosas");
                    texto = textos;
                    break;
                case "2":
                    textos = texto.concat("<br> Doença cardíaca");
                    texto = textos;
                    break;
                case "3":
                    textos = texto.concat("<br> Doença pulmonar");
                    texto = textos;
                    break;
                case "4":
                    textos = texto.concat("<br> Neoplasias ou hipertensão arterial");
                    texto = textos;
                    break;
                case "5":
                    textos = texto.concat("<br> Outras doenças crónicas");
                    texto = textos;
                    break;
                case "6":
                    textos = texto.concat("<br> Tratamentos de quimioterapia");
                    texto = textos;
                    break;
                case "7":
                    textos = texto.concat("<br> Artrite reumatoide");
                    texto = textos;
                    break;
                case "8":
                    textos = texto.concat("<br>  Lúpus");
                    texto = textos;
                    break;
                case "9":
                    textos = texto.concat("<br>  Esclerose múltipla");
                    texto = textos;
                    break;
                case "10":
                    textos = texto.concat("<br>  Doenças inflamatórias do intestino");
                    texto = textos;
                    break;
                case "11":
                    textos = texto.concat("<br>  VIH/sida");
                    texto = textos;
                    break;
                case "12":
                    texto.concat("<br> Doentes transplantados");
                    texto = textos;
                    break;
                case "13":
                    textos = texto.concat("<br> Imunodeficiências e doenças autoimunes");
                    texto = textos;
                    break;
                case "14":
                    textos = texto.concat("<br> Outras");
                    texto = textos;
                    break;

                default:
            }
        }


        this.$("P#saudev").innerHTML = texto;
    }
}