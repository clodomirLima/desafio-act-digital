// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 8080;

// app.use(express.static(__dirname + '/dist/desafio-tech-marvel'));

// app.get('/*', (req, res) => {
//     res.sendFile(__dirname + '/dist/desafio-tech-marvel/index.html');
// });

// app.listen(PORT, () => {
//     console.log("Servidor iniciado na porta " + PORT);
// })

const express = require('express');
const path = require('path');
const nomeApp = 'desafio-angualrjs-marvel';
const app = express();

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 8080);