import "./TituloPrincipal.css"

interface IProps {
    texto: string;
}

const TituloPrincipal = ({texto} : IProps) => {
    return (
        <>
            <h1 className="TituloPrincipal">{texto}</h1>
        </>
    );
}

export default TituloPrincipal;