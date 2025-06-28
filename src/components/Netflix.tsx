import { useState } from "react";

export default function Netflix() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <>
          <div className="absolute z-50 flex justify-around items-center  min-h-screen bg-red-500/50 w-screen">
            <button
              className="fixed top-20 right-50 cursor-pointer rounded-lg bg-blue-500 px-2 py-1"
              onClick={() => {
                setIsOpen((p) => !p);
              }}
            >
              {" "}
              Close{" "}
            </button>
            <div className="bg-red-500 text-black p-3 rounded-2xl w-2/3">
              <h1 className="text-center text-2xl"> Netflix-Clone </h1>
              <ul className="list-disc p-5">
                <li>
                  {" "}
                  Interative UI is developed by using React and Tailwind CSS.
                </li>
                <li>
                  {" "}
                  Firebase is used as backend for storing data and user
                  authentication.{" "}
                </li>
                <li>
                  {" "}
                  TMBD is used as third party API. Trailer of latest movie is
                  shown. List of Popular, Top rated and upcoming movies are
                  shown.
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
      <div className="relative group w-75 h-50 overflow-hidden rounded-lg">
        <img
          src="assets\Projects\image of netflix.jpg"
          className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
        <div
          className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
        >
          <div>
            <h1 className="text-center"> Netflix-Clone</h1>
            <p>
              {" "}
              Netflix-Clone is created by using of React.js, Firebase and
              Third-Party API TMDB.
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
                href="https://netflix-gpt-3cda2.web.app/"
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
  );
}
