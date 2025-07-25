class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        switch(this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi('Gandalf', 1000, 'mago');
heroi1.atacar(); // Saída: o mago atacou usando magia

const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
heroi2.atacar(); // Saída: o guerreiro atacou usando espada

const heroi3 = new Heroi('Lee', 40, 'monge');
heroi3.atacar(); // Saída: o monge atacou usando artes marciais

const heroi4 = new Heroi('Hanzo', 30, 'ninja');
heroi4.atacar(); // Saída: o ninja atacou usando shuriken
