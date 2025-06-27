export default function Header() {
  return (
    <>
      <header className="fixed top-0 w-screen h-15 bg-gray-800 flex  ">
        <div className=" text-3xl text-center text-white flex-1/3   ">
          {" "}
          Portfolio{" "}
        </div>

        <div className="text-white  flex-2/3 flex justify-around  ">
          <a href="#home" className="hover:text-blue-500">
            {" "}
            Home{" "}
          </a>
          <a href="#about" className="hover:text-blue-500">
            {" "}
            About{" "}
          </a>
          <a href="#skill" className="hover:text-blue-500">
            {" "}
            Skill{" "}
          </a>
          <a href="#project" className="hover:text-blue-500">
            {" "}
            Project{" "}
          </a>

          <a href="#certificate" className="hover:text-blue-500">
            {" "}
            certificate{" "}
          </a>

          <a href="#contact" className="hover:text-blue-500">
            {" "}
            Contact Me{" "}
          </a>
        </div>
      </header>
    </>
  );
}
