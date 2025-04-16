var frutas = ["|", "Carambola", "Agave", "Marula", "Mirtilo", "Seriguela", "Fruta-Dragão", "açaí", "Uva Verde", "Abacate", "Cacau", "|"]; //Declaração da variável matriz frutas 

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

const ddds = [43, 11, 44, 45, 21, 18, 41, 42, 85, 69, 23];

let ddd = ddds[0];

switch (ddd) {
    case 12:
    case 11:
        console.log("ddd São Paulo.");
        break;
    case 43:
        console.log("ddd do Paraná - Londrina e região");
        break;
    case 44:
        console.log("ddd de Maringá");
        break;
    case 45:
        console.log("ddd Cascavel");
        break;
    case 21:
        console.log("ddd Rio de Janeiro");
        break;
    case 18:
        console.log("ddd Noroeste");
        break;
    case 41:
        console.log("ddd Curitiba");
        break;
    case 42:
        console.log("ddd Ponta Grossa");
        break;
    case 85:
        console.log("ddd Fortaleza");
        break;
    case 69:
        console.log("ddd Rondônia");
        break;
    case 23:
        console.log("ddd Rio de Janeiro");
        break;
    default:
        console.log("ddd não encontrado.");
        break;
}