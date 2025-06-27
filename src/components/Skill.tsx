export default function Skill() {
  return (
    <>
      <section id="skill" className="text-white min-h-screen">
        <h1 className="text-center text-3xl text-white pt-15 mb-5">
          {" "}
          Technical <span className="text-red-500"> Skills </span> {" "}
        </h1>
        <div className="mx-20 grid grid-cols-1 gap-5 md:grid-cols-5">
          <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
            <img
              className="h-20 w-20 rounded-lg"
              alt="html logo"
              src="assets/Skills/html.png"
            />
          </div>
          <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
            <img
              className="h-20 w-20 rounded-lg "
              alt="css logo"
              src="assets/Skills/css.png"
            />
          </div>
          <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
            <img
              className="h-20 w-20 rounded-lg"
              alt="JavaScript"
              src="assets/Skills/JavaScript.jpeg"
            />
          </div>

          <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
            <img
              alt="tailwindcss logo"
              src="assets/Skills/tailwind css.png"
              className="h-25 w-25 rounded-lg"
            />
          </div>
          <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
            <img
              alt="react logo"
              src="assets/Skills/React.jpeg"
              className="h-25 w-25 rounded-lg"
            />
          </div>
          <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
            <img
              alt="node.js logo"
              src="assets/Skills/Node.js_logo.svg.png"
              className="h-25 w-25 rounded-lg"
            />
          </div>
           <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
        <img
              alt="MySQL"
              src="assets/Skills/MySQL.png"
              className="h-25 w-25 rounded-lg"
            />
          </div>
           <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
               <img
              alt="MongoDb"
              src="assets/Skills/Mongodb.webp"
              className="h-25 w-25 rounded-lg"
            />
          </div>
           <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
               <img
              alt="VS Code"
              src="assets/Skills/VS Code.png"
              className="h-25 w-25 rounded-lg"
            />
          </div>
           <div className="h-30 w-30 flex flex-col justify-center items-center  bg-gray-800 border-2 shadow-2xl shadow-blue-500/50 rounded-2xl hover:bg-blue-200/50">
               <img
              alt="Postman"
              src="assets/Skills/Postman.png"
              className="h-25 w-25 rounded-lg"
            />
          </div>
        </div>
        
      </section>
    </>
  );
}
