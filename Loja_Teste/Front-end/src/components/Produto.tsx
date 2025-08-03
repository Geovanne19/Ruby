import '../styles/Produto.css'

type ProdutoProps = {
  nome: string;
  preco: number;
  img: string;
};

function Produto({ nome, preco, img }: ProdutoProps) {
  return (
    <div className='bg-gray-200 rounded-3xl overflow-hidden cursor-pointer hover:scale-104 transition-transform duration-300 ease-in-out'>
      <img className='h-70' src={img} alt={nome} />
      <div className="p-4">
          <p className='text-2xl text-bold'>{nome}</p>
          <p>R${preco}</p>
      </div>
    </div>
  );
}

<style> 
    
</style>

export default Produto;
