import Netflix from "./Netflix"

export default function Projects() {
  return (
    <>
    <div id="project"> 
    <h1 className=" text-4xl text-center text-white m-5"> My <span className="text-red-500 "> Projects</span></h1>
      <div className="grid grid-cols-3 gap-5 place-items-center">

        <div className="relative group w-75 h-50 overflow-hidden rounded-lg">
          <img
            src="assets\Projects\Tinder.jpeg"
            className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
          >
           <h1> Dev-Tinder</h1>
          </div>
        </div>
{/* 
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
            <h1> Netflix-Clone</h1>
          </div>
        </div> */}

        <Netflix />

        <div className="relative group w-75 h-50 overflow-hidden rounded-lg">
          <img
            src="assets\Projects\live chat.jpg"
            className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
          >
            Hover Text Here
          </div>
        </div>

        <div className="relative group w-75 h-50 overflow-hidden rounded-lg">
          <img
            src="assets\Projects\Tic Tac Toe.png"
            className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
          >
            Hover Text Here
          </div>
        </div>
        <div className="relative group w-75 h-50 overflow-hidden rounded-lg">
          <img
            src="assets\Projects\diary image.jpg"
            className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
          >
            Hover Text Here
          </div>
        </div>
        <div className="relative group w-75 h-50 overflow-hidden rounded-lg">
          <img
            src="assets\Projects\Rock Scissors Paper.jpg"
            className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
          />
          <div
            className="absolute left-0 right-0 bottom-0  transform translate-y-full group-hover:translate-y-0  
          flex items-center justify-center bg-gradient-to-t from-blue-500/50 to-white/25 h-full 
            transition duration-300 text-white text-xl font-semibold"
          >
            Hover Text Here
          </div>
        </div>
    
      </div>
      </div>
    </>
  );
}
