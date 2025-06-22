export default function Skill() {
  return (
    <>
      <section id="skill" className="text-white min-h-screen">
        <h1 className="text-center text-3xl text-red-500 pt-15 mb-5">
          {" "}
          My Skills{" "}
        </h1>
        <div className="mx-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="h-auto bg-red-500 rounded-2xl">
            <h1 className="text-center">Language </h1>
            <div className="grid grid-cols-1 gap-2 m-2 sm:grid-cols-2 md:grid-cols-3 ">
              <img
                className="h-25 w-25 rounded-lg"
                alt="html logo"
                src="assets\html.png"
              />
              <img
                className="h-25 w-25 rounded-lg "
                alt="css logo"
                src="assets\css.png"
              />
              <img
                className="h-25 w-25 rounded-lg"
                alt="JavaScript"
                src="assets\JavaScript.jpeg"
              />
            </div>
          </div>
          <div className="auto  bg-red-500 rounded-2xl">
            <h1 className="text-center"> Framework/Library </h1>
            <div className="grid grid-cols-1 m-2 sm:grid-cols-2 md:grid-cols-3">
              <img
                alt="tailwindcss logo"
                src="assets\tailwind css.png"
                className="h-25 w-25 rounded-lg"
              />
              <img
                alt="react logo"
                src="assets\React.jpeg"
                className="h-25 w-25 rounded-lg"
              />
              <img
                alt="node.js logo"
                src="assets\Node.js_logo.svg.png"
                className="h-25 w-25 rounded-lg"
              />
            </div>
          </div>

          <div className="h-auto  bg-red-500 rounded-2xl">
            <h1 className="text-center"> DataBase </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" >
              <img
                alt="MySQL"
                src="assets\MySQL.png"
                className="h-25 w-25 rounded-lg"
              />
              <img
                alt="MongoDb"
                src="assets\Mongodb.webp"
                className="h-25 w-25 rounded-lg"
              />
            </div>
          </div>
          <div className="h-auto  bg-red-500 rounded-2xl">
            <h1 className="text-center"> Tools and Technologies </h1>
             <div className="grid grid-cols-1 m-2 sm:grid-cols-2 md:grid-cols-3" >
              <img
                alt="VS Code"
                src="assets\VS Code.png"
                className="h-25 w-25 rounded-lg"
              />
              <img
                alt="Postman"
                src="assets\Postman.png"
                className="h-25 w-25 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
