export default function Netflix() {
  return (
    <>
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
            <div className="flex justify-around">
              {" "}
              <button className="bg-blue-700 text-white px-2 py-1 rounded-lg cursor-pointer">
                {" "}
                Detail
              </button>
              <a
                href="https://netflix-gpt-3cda2.web.app/"
                target="_blank"
                className="bg-blue-700 text-white px-2 py-1 rounded-lg cursor-pointer"
              > Website </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
