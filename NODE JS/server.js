const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.method);
    if (req.url === "/users") {
        if (req.method === "GET") {
            res.end('LISTAGEM DE TODOS USUARIOS');
        } else if (req.method === "POST") {
            res.end('CRIACAO DE USUARIO');
        } else if (req.method === "DELETE") {
            res.end('DELEÇÃO DE USUARIO');
        } else {
            res.end('NAO AUTORIZADO');
        }
    } else {
        res.end('Ops a endpoint nao existe');
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
