

export const PrimaryButton = ({handleClick} : {handleClick: () => void}) => {
  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg focus:outline-none focus:shadow-outline text-2xl relative z-10 transition-colors duration-200 ease-out"
      onClick={ handleClick }
    >Entrar</button>
  )
}

export default PrimaryButton
