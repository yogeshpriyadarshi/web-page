import  { useEffect, useState } from 'react'

export default function DevTinder() {
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
          <div className="fixed top-0 z-50 flex justify-around items-center  h-screen bg-gray-700/50 w-screen">
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
              <h1 className="text-center text-4xl"> Dev-Tinder </h1>
               <ul className="list-disc p-5 text-3xl">
                <li>
                  Implemented user signup, login, and logout functionality using
                  JWT authentication and secure password hashing (bcrypt).
                </li>
                <li>
                  {" "}
                  Designed and built connection request system allowing users to
                  send, accept, or reject friend requests.{" "}
                </li>
                <li>
                  Developed RESTful APIs with Node.js and Express for user
                  management and connection handling.
                </li>
                <li>
                  {" "}
                  Managed and stored user data and connection status using
                  MongoDB Atlas{" "}
                </li>
                <li>
                  {" "}
                  Created a responsive and clean UI with React, styled using
                  Tailwind CSS and semantic HTML.
                </li>
                <li>
                  {" "}
                  Applied conditional rendering to reflect connection statuses
                  (pending, accepted, denied) in real time.
                </li>
                <li>
                  {" "}
                  Added private live chat functionality allowing two users to
                  chat in real time.{" "}
                </li>
                <li>
                  {" "}
                  Used Socket.IO to manage real time messaging and connection
                  events.{" "}
                </li>
                <li>
                  {" "}
                  Ensured seamless communication with room-based socket
                  architecture.{" "}
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      <div className="relative group w-75 h-50 overflow-hidden rounded-lg shadow-lg shadow-blue-500">
        <img
          src="assets\Projects\Tinder.jpeg"
          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div
          className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
        >
          <div>
            <h1 className="text-center"> Dev-Tinder</h1>
            <p>
              {" "}
             Dev-Tinder is social media where web developers make connection and disscus on projects.
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
