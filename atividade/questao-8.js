let vidaHeri = 10;
let pocao = true;

// O herói sofre 3 ataques, perdendo 4 de vida a cada ataque (total: 12 de dano)
for (let ataque = 1; ataque <= 3; ataque++) {
    vidaHeri -= 4;
}

// Operador ternário aninhado para definir o status final
let status = (vidaHeri > 0) ? "Vivo" : (pocao) ? "Ressuscitado" : "Game Over";

console.log(status); // Imprime: Ressuscitado