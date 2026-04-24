const express = require('express');
const app = express();


app.use(express.json());

const personagensNaruto = [
  {
    nome: "Naruto",
    sobrenome: "Uzumaki",
    idade: 17,
    chakra: 100,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Genin",
  },
  {
    nome: "Sasuke",
    sobrenome: "Uchiha",
    idade: 17,
    chakra: 85,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Sakura",
    sobrenome: "Haruno",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kakashi",
    sobrenome: "Hatake",
    idade: 31,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Gaara",
    sobrenome: null,
    idade: 17,
    chakra: 90,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Kazekage",
  },
  {
    nome: "Rock",
    sobrenome: "Lee",
    idade: 18,
    chakra: 20,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Hinata",
    sobrenome: "Hyuga",
    idade: 16,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Chunin",
  },
  {
    nome: "Shikamaru",
    sobrenome: "Nara",
    idade: 17,
    chakra: 35,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Tsunade",
    sobrenome: null,
    idade: 55,
    chakra: 95,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Hokage",
  },
  {
    nome: "Jiraiya",
    sobrenome: null,
    idade: 54,
    chakra: 88,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Orochimaru",
    sobrenome: null,
    idade: 54,
    chakra: 92,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Itachi",
    sobrenome: "Uchiha",
    idade: 21,
    chakra: 60,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Neji",
    sobrenome: "Hyuga",
    idade: 18,
    chakra: 55,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Tenten",
    sobrenome: null,
    idade: 18,
    chakra: 30,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Ino",
    sobrenome: "Yamanaka",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Choji",
    sobrenome: "Akimichi",
    idade: 17,
    chakra: 75,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kiba",
    sobrenome: "Inuzuka",
    idade: 17,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Shino",
    sobrenome: "Aburame",
    idade: 17,
    chakra: 65,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Sai",
    sobrenome: null,
    idade: 17,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Anbu",
  },
  {
    nome: "Temari",
    sobrenome: null,
    idade: 20,
    chakra: 70,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Jonin",
  },
];


const nomes = personagensNaruto.map(p => p.nome + (p.sobrenome ? " " + p.sobrenome : ""));

const menoresDaFolha = personagensNaruto.filter(p => p.ehDaFolha && p.idade < 18);

const quantidadeKekkeiGenkai = personagensNaruto.reduce((total, p) => total + (p.possuiKekkeiGenkai ? 1 : 0), 0);

const chakrasJonin = personagensNaruto.filter(p => p.nivel === "Jonin").map(p => p.chakra);

const totalChakra = personagensNaruto.reduce((total, p) => total + p.chakra, 0);

const mediaChakra = personagensNaruto.reduce((total, p) => total + p.chakra, 0) / personagensNaruto.length;

const menorChakra = personagensNaruto.reduce((menor, p) => p.chakra < menor.chakra ? p : menor);

const maiorChakra = personagensNaruto.reduce((maior, p) => p.chakra > maior.chakra ? p : maior);

const mediaRazaoChunin = personagensNaruto
  .filter(p => p.nivel === "Chunin")
  .map(p => p.chakra / p.idade)
  .reduce((total, r, _, arr) => total + r / arr.length, 0);

const maiorRazao = personagensNaruto
  .map(p => ({ nome: p.nome, razao: p.chakra / p.idade }))
  .reduce((maior, p) => p.razao > maior.razao ? p : maior);

const menorRazao = personagensNaruto
  .map(p => ({ nome: p.nome, razao: p.chakra / p.idade }))
  .reduce((menor, p) => p.razao < menor.razao ? p : menor);


app.get('/', (req, res) => res.send('API Naruto funcionando'));

app.get('/nomes', (req, res) => res.json(nomes));


app.get('/menores-da-folha', (req, res) => res.json(menoresDaFolha));

app.get('/kekkei-genkai', (req, res) => res.json({ quantidade: personagensNaruto.reduce((total, p) => total + (p.possuiKekkeiGenkai ? 1 : 0), 0) }));

app.get('/chakras-jonin', (req, res) => 
  res.json(personagensNaruto.filter(p => p.nivel === "Jonin").map(p => p.chakra))
);


app.get('/chakra-stats', (req, res) => {
  const total = personagensNaruto.reduce((t, p) => t + p.chakra, 0);
  const media = total / personagensNaruto.length;
  const menor = personagensNaruto.reduce((m, p) => p.chakra < m.chakra ? p : m);
  const maior = personagensNaruto.reduce((m, p) => p.chakra > m.chakra ? p : m);

  res.json({
    total,
    media,
    menor,
    maior
  });
});



app.get('/media-chakra-idade-chunin', (req, res) =>
  res.json({
    media: personagensNaruto
      .filter(p => p.nivel === "Chunin")
      .map(p => p.chakra / p.idade)
      .reduce((total, r, _, arr) => total + r / arr.length, 0)
  })
);

app.get('/razao-extremos', (req, res) => {
  const maior = personagensNaruto
    .map(p => ({ nome: p.nome, razao: p.chakra / p.idade }))
    .reduce((m, p) => p.razao > m.razao ? p : m);

  const menor = personagensNaruto
    .map(p => ({ nome: p.nome, razao: p.chakra / p.idade }))
    .reduce((m, p) => p.razao < m.razao ? p : m);

  res.json({ maior, menor });
});



app.listen(8080, () => {
  console.log('Servidor rodando em http://localhost:8080');
});