import  { useEffect, useState } from 'react'

export default function DoIt() {
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
              <h1 className="text-center text-4xl"> Do It - Diary </h1>
                    <ul className="list-disc text-3xl p-5">
                <li>
                  {" "}
                  It is full stack Application where user can login, sin up and
                  Logout. User can generate to do list and give point according
                  to performance.
                </li>
                <li>
                  {" "}
                  There is journal page where user can write about a day. User
                  can set custom target where they can mention starting date and
                  ending date for target. Each day, user can upload activity
                  pertaining to target.{" "}
                </li>
                <li>
                  {" "}
                  HTML, CSS, JavaScript, React, Node.js and MySQL are used for
                  developing Application.{" "}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      <div className="relative group w-75 h-50 overflow-hidden rounded-lg shadow-lg shadow-blue-500">
        <img
          src="assets\Projects\diary image.jpg"
          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div
          className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
        >
          <div>
            <h1 className="text-center"> Do It - Diary</h1>
            <p>
              {" "}
             Daily tasks are recorded and write about day.
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
              {/* <a
                href="https://netflix-gpt-3cda2.web.app/"
                target="_blank"
                className="bg-blue-700 text-white px-2 py-1 rounded-lg cursor-pointer"
              >
                {" "}
                Website{" "}
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
 
  )
}
