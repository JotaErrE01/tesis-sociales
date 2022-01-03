

const PrimaryButton = ({handleClick} : {handleClick: () => void}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-2xl"
      onClick={ handleClick }
    >Entrar</button>
  )
}

export default PrimaryButton
