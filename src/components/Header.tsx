export default function Header() {
  return (
    <>
      <header className="flex fixed top-0 w-screen h-15 bg-gray-800  ">
        <div className=" flex-3/12 mx-15 my-5 text-3xl text-white  ">
          {" "}
          Yogesh{" "}
        </div>

        <div className="hidden md:flex-4/12  mx-15 my-5 text-white md:flex justify-around ">
          <a href="#home" className="hover:text-blue-500">
            {" "}
            Home{" "}
          </a>
          <a href="#about" className="hover:text-blue-500">
            {" "}
            About{" "}
          </a>
          <a href="#project" className="hover:text-blue-500">
            {" "}
            Project{" "}
          </a>
          <a href="#skill" className="hover:text-blue-500">
            {" "}
            Skill{" "}
          </a>
          <a href="#certificate" className="hover:text-blue-500">
            {" "}
            certificate{" "}
          </a>

          <a href="#education" className="hover:text-blue-500">
            {" "}
            Education{" "}
          </a>
        </div>
      </header>
    </>
  );
}
