import { makeVar } from "@apollo/client"
import { ICategoria } from "../../interfaces/ICategoria"
import { ILivro } from "../../interfaces/ILivro"

interface Iprops {
    categoria?: ICategoria,
    titulo?: string
}

export const filtroLivrosVar = makeVar<Iprops>({})

export const livrosVar = makeVar<ILivro[]>([])