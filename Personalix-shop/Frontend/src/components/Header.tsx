import logo from '../assets/logo-personalix.png'

export const Header = () => {
  return (
    <header className='flex justify-around items-center overflow-hidden h-19'>
        <img className='h-11' src={logo} alt="logo" />
        <div className="border-1 border-gray-400 rounded-2xl overflow-hidden flex">
            <input className='outline-none pb-2 pt-2 p-3 w-80' type="text" />
            <button className='p-2 cursor-pointer'><i className='bxr align-middle  bx-search text-2xl'></i> </button>
        </div>
        <i className='bxr  bx-user text-3xl cursor-pointer border-1 border-gray-400 rounded-4xl p-2 ml-17 mr-17'  ></i> 
        </header>
  )
}

export default Header
