import { useQuery } from "@apollo/client/react/hooks";
import { ILivro } from "../../interfaces/ILivro";
import { OBTER_LIVRO } from "./queries";

export const useLivro = (slug: string) => {
    return useQuery<{ livro: ILivro }>(OBTER_LIVRO, {
        variables: {
            slug
        }
    })
}