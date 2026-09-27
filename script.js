// B.1 - Definição dos dados

const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "O Mentalista",
        tipo: "serie",
        ano: 2008,
        generos: ["Drama Policial", "Thriller Psicológico", "Procedimento Policial"],
        nota: 9.8,
        assistido: true
    },
    {
        id: 3,
        titulo: "Homem-Aranha",
        tipo: "filme",
        ano: 2002,
        generos: ["ação", "aventura"],
        nota: 8.5,
        assistido: false
    },
    {
        id: 4,
        titulo: "Dexter",
        tipo: "serie",
        ano: 2006,
        generos: ["Drama", "Suspense", "Crime/Policial"],
        nota: 9.0,
        assistido: false
    },
    {
        id: 5,
        titulo: "O Poderoso Chefão",
        tipo: "filme",
        ano: 1972,
        generos: ["drama", "crime"],
        nota: 9.7,
        assistido: true
    },
    {
        id: 6,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção científica", "terror"],
        nota: 8.7,
        assistido: false
    }
];
// B.2 

console.log(catalogo);

console.log("Título do primeiro item:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}

// B.3 
catalogo.forEach(function(item) {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B.3 B - Transformação com map

const titulosEmCaixaAlta = catalogo.map(function(item) {
    return item.titulo.toUpperCase();
});

console.log("Títulos em caixa alta:", titulosEmCaixaAlta);

// B.3 C

const naoAssistidos = catalogo.filter(function(item) {
    return item.assistido === false;
});

console.log("Itens não assistidos:", naoAssistidos);
console.log("Quantidade de não assistidos:", naoAssistidos.length);

// B.3 D 

const primeiroNotaAlta = catalogo.find(function(item) {
    return item.nota >= 9;
});

if (primeiroNotaAlta) {
    console.log(
        "Primeiro item com nota >= 9:",
        primeiroNotaAlta.titulo,
        primeiroNotaAlta.nota
    );
} else {
    console.log("Nenhum item possui nota >= 9.");
}

// B.3 E 

const somaNotas = catalogo.reduce(function(total, item) {
    return total + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

console.log("Média geral:", mediaGeral.toFixed(2));

// B.3 F 
const existeAnterior2000 = catalogo.some(function(item) {
    return item.ano < 2000;
});

console.log("Existe item anterior ao ano 2000?", existeAnterior2000);

// B.4

const quantidadeFilmes = catalogo.filter(function(item) {
    return item.tipo === "filme";
}).length;

const quantidadeSeries = catalogo.filter(function(item) {
    return item.tipo === "serie";
}).length;

const ranking = [...catalogo].sort(function(a, b) {
    return b.nota - a.nota;
}).slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 maiores notas</h3>

    <ol>
        ${ranking.map(function(item) {
            return `<li>${item.titulo} - ${item.nota}</li>`;
        }).join("")}
    </ol>
`;