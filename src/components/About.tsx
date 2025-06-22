
export default function About() {
  return (
    <>
<section id="about" className="text-white md:flex "> 

 <div className="flex-1 h-screen flex justify-center items-center rounded-2xl "> 
<img alt="Background Imgae" src="assets\computer download.jpg" className="rounded-2xl" />
  </div>

  <div className="flex-1 h-screen flex flex-col justify-center items-center"> 
    <div>  
 <div className="text-red-500 m-2"> About Me </div>
    <div className="text-3xl m-2" > I'm <span className="text-red-500"> Yogesh </span></div>
    <div className="text-3xl m-2"> Web <span className="text-red-500"> Developer  </span >  </div>
    <div className="text-2xl m-2"> Based in Pune</div>
    <p className="mx-2 mt-5"> I am Yogesh Priyadarshi. I have strong interest in web developing.     </p>
    </div>
     </div>
</section>


    </>
  )
}
