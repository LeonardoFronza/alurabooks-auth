import { AbCampoTexto } from "ds-alurabooks";
import { useLivros } from "../../graphql/livros/hook";
import { filtroLivrosVar } from "../../graphql/livros/state";
import { livrosVar } from "../../graphql/livros/state";
import { ICategoria } from "../../interfaces/ICategoria";
import { useState,useEffect } from "react";
import { useReactiveVar } from "@apollo/client";
import CardLivro from "../CardLivro";

import "./ListaLivros.css";

interface IProps {
  categoria: ICategoria;
}

const ListaLivros = ({ categoria }: IProps) => {
  //const { data: produtos } = useQuery(["buscaLivrosCategoria", categoria], () =>
  //  obterProdutoCategoria(categoria)
  //);

  const [textoBusca, setTextoBusca] = useState("");

  useEffect(() => {
    filtroLivrosVar({
      ...filtroLivrosVar(),
      titulo: textoBusca.length >= 3 ? textoBusca : ''
    })
  },[textoBusca])

  filtroLivrosVar({
    ...filtroLivrosVar(),
    categoria
  })

  const livros = useReactiveVar(livrosVar);

  useLivros();

  return (
    <section>
      <form
        style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}
      >
        <AbCampoTexto
          value={textoBusca}
          onChange={setTextoBusca}
          placeholder="Digite o título"
        />
      </form>

      <div className="livros">
        {livros.map((livro) => (
          <CardLivro livro={livro} key={livro.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaLivros;
