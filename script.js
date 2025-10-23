const conselho = [
    "Acredite em você mesmo.", 
    "O primeiro passo é o mais importante.",
    "A persistência realiza o impossível.",
    "Aprenda algo novo hoje",
    "Seja gentil com todos que encontrar.",
];

const conselhoTexto = document.getElementById('conselhoTexto');
const novoConselhoBtn = document.getElementById('novoConselhoBtn');

    function gerarConselho ( ) {
        const indice = Math.floor(Math.random() * (conselho.length +1));
        conselhoTexto.textContent = conselho [indice];
}

novoConselhoBtn.addEventListener('click', gerarConselho);