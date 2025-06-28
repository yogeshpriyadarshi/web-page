import  { useEffect, useState } from 'react'

export default function TicTackToe() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
      if(isOpen){
        document.body.classList.add("modal-open");

      }else{
        document.body.classList.remove("modal-open");
      }

      return ()=>{
        document.body.classList.remove("modal-open")
      }


    },[isOpen])
  return (
     <>
      {isOpen && (
        <>
          <div className="fixed top-0 z-50 flex justify-around items-center  h-screen bg-gray-500/50 w-screen">
            <button
              className="fixed top-15 right-15 cursor-pointer rounded-lg bg-red-500 px-2 py-1"
              onClick={() => {
                setIsOpen((p) => !p);
              }}
            >
              {" "}
              Close{" "}
            </button>
            <div className="bg-blue-500 text-white p-3 rounded-2xl w-4/5">
              <h1 className="text-center text-4xl"> Tic-Tac-Toe </h1>
               <ul className="list-disc p-5 text-3xl">
                
                <li>
                  {" "}
                  Implemented core game logic including player turns, win/tie detection, and game 
reset. Build responsive UI By using of CSS and DOM manipulation efficiently..{" "}
                </li>
                
              
                
              </ul>
            </div>
          </div>
        </>
      )}
      <div className="relative group w-75 h-50 overflow-hidden rounded-lg shadow-lg shadow-blue-500">
        <img
          src="assets\Projects\Tic Tac Toe.png"
          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div
          className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
        >
          <div>
            <h1 className="text-center"> Tic-Tac-Toe</h1>
            <p>
              {" "}
             Tic-tac-toe is a two-player game played on a 3x3 grid. 
            </p>
            <div className="flex justify-around m-2">
              {" "}
              <button
                className="bg-blue-700 text-white px-2 py-1 rounded-lg cursor-pointer"
                onClick={() => {
                  setIsOpen((p) => !p);
                }}
              >
                {" "}
                Detail
              </button>
               <a
                href="https://splendid-beijinho-9f9c97.netlify.app/"
                target="_blank"
                className="bg-blue-700 text-white px-2 py-1 rounded-lg cursor-pointer"
              >
                {" "}
                Website{" "}
              </a> 
            </div>
          </div>
        </div>
      </div>
    </>
   
  )
}
