import { ILivro } from "../../interfaces/ILivro";
import { useQuery } from "@apollo/client/react/hooks";
import { OBTER_LIVROS } from "./queries";
import { filtroLivrosVar, livrosVar } from "./state";
import { useReactiveVar } from "@apollo/client";

export const useLivros = () => {
    const filtros = useReactiveVar(filtroLivrosVar)
    return (
        useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
            variables: {
              categoriaId: filtros.categoria?.id,
              titulo: filtros.titulo
            },
            onCompleted(data) {
                if (data.livros) {
                    livrosVar(data.livros)
                }
            }
          })
    )
}