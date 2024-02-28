import livro from "../models/Livros.js";

class LivroController {
  static async ListarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async CadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({
        menssage: "Livro criado com sucesso",
        livro: novoLivro,
      });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao cadastrar livro`,
      });
    }
  }

  static async ListarLivrosPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async AtualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({menssage: "Livro Atualizado"});
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização` });
    }
  }

static async DeletarLivros(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({menssage: "Livro Excluído"});
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}
export default LivroController;
