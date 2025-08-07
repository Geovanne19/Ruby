// src/pages/CategoriaPage.tsx
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

function CategoriaPage() {
  const { nome } = useParams();
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/produtos?categoria_nome=${nome}`)
      .then((resp) => {
        const produtosComPrecoNum = resp.data.map((produto: any) => ({
          ...produto,
          preco:
            produto.preco !== undefined ? Number(produto.preco) : undefined,
        }));
        setProdutos(produtosComPrecoNum);
      })
      .catch((e) => {
        console.error("Erro ao buscar produtos da categoria:", e);
      });
  }, [nome]);

  return (
    <div className="pl-15 pr-15 pb-15">
      <Header />
      <h1 className="text-2xl font-semibold mb-10 mt-10">
        Produtos da categoria: <span className="text-gray-700">{nome}</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="p-4 border border-gray-200 cursor-pointer rounded-lg hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/produto/${produto.id}/${encodeURIComponent(produto.nome.toLowerCase())}`)}
          >
            <img
              src={produto.imagem || "../src/assets/no-image.png"}
              alt={produto.nome}
              className="mb-2 object-cover rounded"
            />
            <h2 className="font-semibold text-lg">{produto.nome}</h2>
            <p className="text-sm text-gray-700">{produto.descricao}</p>
            <p className="text-green-600 font-semibold mt-2">
              R$ {produto.preco.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriaPage;
