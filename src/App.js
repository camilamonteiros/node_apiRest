import Express from "express";
import DatabaseConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await DatabaseConnect();
conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});
conexao.once("open", () => {
    console.log('Conexão bem-sucedida');
});

const App = Express();
routes(App)

App.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send('Livro removido com sucesso.');
});


export default App;

