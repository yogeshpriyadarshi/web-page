import About from "./components/About";
import Certificate from "./components/Certificates/Certificate";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skill";

const App = () => {

  return (
    <>  
    <div className="min-h-screen w-full  bg-gray-800">

<Header />

<Home />

<About />

<Skill />

<Projects />

<Certificate />

{/* <Education /> */}

<Contact />
    </div>
    </>
  );
};

export default App;