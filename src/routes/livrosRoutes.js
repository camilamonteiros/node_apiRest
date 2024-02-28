import Express from "express";
import LivroController from "../controllers/livroController.js";

const routes = Express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.get("/livros/:id", LivroController.ListarLivrosPorId);
routes.post("/livros", LivroController.CadastrarLivro);
routes.put("/livros/:id", LivroController.AtualizarLivro);
routes.delete("/livros/:id", LivroController.DeletarLivros);

export default routes;