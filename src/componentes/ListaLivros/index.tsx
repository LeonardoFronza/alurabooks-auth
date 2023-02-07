import { ICategoria } from "../../interfaces/ICategoria";
import { useQuery } from "@tanstack/react-query";
import { obterProdutoCategoria } from "../../http";
import CardLivro from "../CardLivro";

import "./ListaLivros.css";

interface IProps {
  categoria: ICategoria;
}

const ListaLivros = ({ categoria }: IProps) => {
  const { data: produtos } = useQuery(["buscaLivrosCategoria", categoria], () =>
    obterProdutoCategoria(categoria)
  );

  return (
    <section className="livros">
      {produtos?.map((livro) => (
        <CardLivro livro={livro} key={livro.id} />
      ))}
    </section>
  );
};

export default ListaLivros;
