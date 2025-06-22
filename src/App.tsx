import About from "./components/About";
import Certificate from "./components/Certificate";
import Education from "./components/Education";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

const App = () => {

  return (
    <>  
    <div className="min-h-screen bg-gray-800">
{/* header */}
<Header />
{/* Home */}
<Home />

<About />

<Projects />

<Skill />

<Certificate />

<Education />


      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Yogesh Priyadarshi. All rights reserved.</p>
        </div>
      </footer>


    </div>

 
  
    </>
  
  );
};

export default App;