import { useEffect, useState } from "react"

export default function JavaScript() {
    const [isOpen, setIsOpen] = useState(false);

      useEffect(()=>{
        if(isOpen){
          document.body.classList.add("modal-open");
        }else{
          document.body.classList.remove("modal-open");
        }
    
        return () =>{
          document.body.classList.remove("modal-open");
        }
      },[isOpen]);

  return (
    <>
    {isOpen && (
        <> 
      
         <div className="fixed top-0 h-screen w-screen flex justify-center items-center z-50  bg-gray-800/50">
              <button className="fixed z-51 top-15 right-15 rounded-lg bg-red-500 px-2 py-1 cursor-pointer" 
       onClick={()=>{setIsOpen(p=>!p)}}
        > Close  </button>
            <img
              alt="JavaScript"
              src="assets\Certificate\Namaste javascript.webp"
              className="h-175 w-175 rounded-2xl"
            />
          </div>
        </>
    )}

  <div className="h-50 w-75 rounded-2xl bg-gray-500 p-5 relative shadow-lg shadow-blue-500 ">

            <h1 className="text-center text-white text-3xl"> JavaScript</h1>

            <div className="flex justify-center items-center  ">

              <button className="px-2 py-1 bg-blue-500 rounded-lg absolute bottom-5 cursor-pointer active:bg-blue-900"
              onClick={()=>{setIsOpen(p=>!p)}}
              >
                {" "}
                View{" "}
              </button>
            </div>
          </div>

    </>
  )
}
