import { useNavigate } from 'react-router-dom';
import '../styles/Categoria.css';

type ProdutoProps = {
  nome: string;
  img: string;
};

function Categoria({ nome, img, }: ProdutoProps) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
       navigate(`/categoria/${encodeURIComponent(nome.toLocaleLowerCase())}`);
      }}
      className="relative bg-gray-200 rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <span className="degrade-overlay"></span>
      <h2 className="font-fjalla absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl z-10">
        {nome.toUpperCase()}
      </h2>
      <img className="h-70" src={img} alt={nome} />
    </div>
  );
}

export default Categoria;