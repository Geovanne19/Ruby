import { useEffect, useState } from 'react'
import Categoria from '../components/Categoria'
import Header from '../components/Header'
import '../styles/Home.css'
import imgDestaque_teste from '../assets/destaque-teste.png'
import axios from 'axios'


const URL = "http://127.0.0.1:3000/categorias"

type CategoriaType = {
  nome: string;
  preco: number;
  img: string;
  id: number;
};

function Home() {

  const [categorias, setCategorias] = useState<CategoriaType[]>([])

  function getCategorias() {
    axios.get(URL)
    .then(resp => {
      setCategorias(resp.data)
    })
    .catch(e => {
      console.error("Erro ao buscar Categorias", e)
    })
  }

  useEffect(() => {
    getCategorias()
  }, [])


  return (
    <>
      <Header></Header>      

      <footer className="flex align-center justify-center p-1.5">
        <h3 className='font-medium'>Categorias</h3>
      </footer>

      <section>
        <img src={imgDestaque_teste} alt="destaque" />
      </section>

      <section className="Categorias p-10 flex gap-10 justify-center flex-wrap pl-10 pr-10">
        {Array.isArray(categorias) && categorias.map((categoria) => (
          <Categoria
            key={categoria.id}
            nome={categoria.nome}
            img={categoria.img}
          />
        ))}
      </section>
    </>
  )
}

export default Home;
