import { useEffect, useState } from 'react'
import Produto from '../components/Produto'
import '../styles/Home.css'
import imgDestaque_teste from '../assets/destaque-teste.png'
import logo from '../assets/logo-personalix.png'
import axios from 'axios'


const URL = "http://127.0.0.1:3000/produtos"

type ProdutoType = {
  nome: string;
  preco: number;
  img: string;
  id: number;
};

function Home() {

  const [produtos, setProdutos] = useState<ProdutoType[]>([])

  function getProdutos() {
    axios.get(URL)
    .then(resp => {
      setProdutos(resp.data)
    })
    .catch(e => {
      console.error("Erro ao buscar produtos", e)
    })
  }

  useEffect(() => {
    getProdutos()
  }, [])


  return (
    <>
      <header className='flex justify-around items-center overflow-hidden h-19'>
        <img className='h-11' src={logo} alt="logo" />
        <div className="border-2 rounded-2xl overflow-hidden flex">
          <input className='outline-none pb-2 pt-2 p-3 w-80' type="text" />
          <button className='p-2 cursor-pointer'><i className='bxr align-middle  bx-search text-2xl'></i> </button>
        </div>
        <i className='bxr  bx-user text-3xl cursor-pointer border-1 rounded-4xl p-2 ml-17 mr-17'  ></i> 
      </header>

      <footer className="flex align-center justify-center p-1.5">
        <h3 className='font-medium'>Categorias</h3>
      </footer>

      <section>
        <img src={imgDestaque_teste} alt="destaque" />
      </section>

      <section className="produtos p-10 flex gap-10 justify-center flex-wrap pl-10 pr-10">
        {Array.isArray(produtos) && produtos.map((produto) => (
          <Produto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            img={produto.img}
          />
        ))}
      </section>
    </>
  )
}

export default Home;
