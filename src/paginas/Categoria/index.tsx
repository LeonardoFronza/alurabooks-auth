import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ListaLivros from "../../componentes/ListaLivros";
import Loading from "../../componentes/Loading";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { obterCategoriaPorSlug } from "../../http";

const Categoria = () => {
  //const [categoria, setCategoria] = useState<ICategoria>();
  //const [carregando, setCarregando] = useState(false);

  const params = useParams();

  const {data: categoria, isLoading } = useQuery(["categoriaPorSlug", params.slug], () => obterCategoriaPorSlug(params.slug || ''));

  {/*useEffect(() => {
    setCarregando(true);
    http
      .get<ICategoria[]>("categorias", {
        params: {
          slug: params.slug,
        },
      })
      .then((respota) => {
        setCategoria(respota.data[0]);
        setCarregando(false);
      });
  }, [params.slug]); */}

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <TituloPrincipal texto={`${categoria?.nome ?? ""}`} />
      <ListaLivros categoria={categoria!}/>
    </section>
  );
};

export default Categoria;
