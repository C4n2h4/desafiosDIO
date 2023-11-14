class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "a magia Kal Vas Flam";
                break;
            case "guerreiro":
                ataque = "a Espada Solar";
                break;
            case "monge":
                ataque = "o Punho do Dragão";
                break;
            case "ninja":
                ataque = "a Shuriken Fantasma";
                break;
            default:
                ataque = "um ataque genérico";
        }

        const mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

// Exemplos de uso
const heroiMago = new Heroi("Merlin", 100, "mago");
heroiMago.atacar();

const heroiGuerreiro = new Heroi("Conan", 35, "guerreiro");
heroiGuerreiro.atacar();

const heroiMonge = new Heroi("Bruce Lee", 40, "monge");
heroiMonge.atacar();

const heroiNinja = new Heroi("Hanzo", 25, "ninja");
heroiNinja.atacar();