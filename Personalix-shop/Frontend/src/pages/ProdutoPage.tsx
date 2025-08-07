import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

type ProdutoType = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
};

function ProdutoPage() {
  const { slug } = useParams();
  const [produto, setProduto] = useState<ProdutoType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;
    axios
      axios
        .get<ProdutoType>(`http://127.0.0.1:3000/produtos/${slug}`)
        .then((response) => {
          setProduto(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar produto:", error);
          navigate("/home");
        });
  }, [slug, navigate]);

  if (!produto) return <div>Carregando...</div>;

  return (
    <div >
      <Header />
      <div className="flex justify-center items-center p-10">
        <div className="flex">
            <img
              src={produto.imagem || "/src/assets/no-image.png"}
              alt={produto.nome}
              className="w-max h-140 object-cover rounded"
            />
            <div className="flex flex-col justify-between p-6">
                <div>
                    <h2 className="font-semibold text-2xl">{produto.nome}</h2>
                    {/* <p className="text-sm text-gray-700">{produto.descricao}</p> */}
                    <p className="text-green-600 font-semibold text-xl mt-2">
                      R$ {Number(produto.preco).toFixed(2)}
                    </p>
                </div>
                <div>
                    <p>Entrega</p>
                    <div className="">
                        <input className="border border-gray-300 mt-1 mr-2 rounded p-2" type="text" placeholder="Insira seu CEP" />
                        <button className="p-2 rounded text-white bg-black cursor-pointer">Simular</button>
                    </div>
                </div>
                <button className="p-2 rounded text-white font-bold text-lg mt-2 bg-green-500 cursor-pointer">Comprar</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutoPage;
