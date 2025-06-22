

export default function Home() {
  return (
    <> 
    <section id="home" className="flex  h-screen" > 
    <div className="flex-1  text-white flex flex-col justify-center items-center"> 
      <div> 
    <div className="my-3 mx-15"> Hello, I'm </div>
    <div className="my-3 mx-15 text-5xl text-red-700"> Yogesh  </div>
    <div className="my-3 mx-15 text-3xl">  Full Stack Developer </div>
     </div>
    
    </div>
    <div className="flex-1 flex justify-center  items-center ">    
       <img src="assets\profile pic.jpeg" alt="Profile Pic" className="rounded-full h-125 w-125" />
       </div>
    </section>
    </>
  )
}
