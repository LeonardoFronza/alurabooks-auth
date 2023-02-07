import { AbBotao } from "ds-alurabooks"
import { Link } from "react-router-dom"
import { ILivro } from "../../interfaces/ILivro"

import './CardLivro.css'

interface CardLivroProps {
    livro: ILivro
}

const obterValorMinimo = (livro: ILivro) => {
    return Math.min(...livro.opcoesCompra.map(op => op.preco))
}

const CardLivro = ( { livro } : CardLivroProps) => {
    return (<div className="livro" key={livro.id}>
        <img src={livro.imagemCapa} alt={livro.descricao} />
        <ul>
            <li>
                <strong>{livro.titulo}</strong>
            </li>
            <li>
                A partir de: <strong>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(obterValorMinimo(livro))}</strong>
            </li>
            <li className="link-container">
                <Link to={`/livro/${livro.slug}`}>
                    <AbBotao texto="Comprar" />
                </Link>
            </li>
        </ul>
    </div>)
}

export default CardLivro