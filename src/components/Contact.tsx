
export default function Contact() {
  return (
    <>
    <div id="contact" className="bg-gray-800"> 
        <h1 className="text-3xl text-center text-white m-5"> Contact <span className="text-red-500"> Me!!  </span> </h1>
        <p className="text-white text-center text-2xl m-5"> I am always excited to work on some awesome projects, message me and let's discuss over coffee. </p>
       
            <p className="text-white text-2xl text-center m-5" > Contact me via mail: yogeshpriyadarshi55@gmail.com </p>

            <div className="flex justify-around m-10"> 
                <div>
                      <footer className="bg-gray-800 text-white py-4 ">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Yogesh Priyadarshi. All rights reserved.</p>
        </div>
      </footer>
                </div>

                 <div>
                     <img src="assets\Yogesh Priyadarshi.png" /> </div>
                  <div className="flex">   
                    <a href="https://www.linkedin.com/in/yogesh-priyadarshi-067b9b362/" target="_blank">
                {" "}
                <img
                  src="assets/Contacts/LinkedIN.webp"
                  className="h-15 w-15 rounded-full"
                />{" "}
              </a>
              <a href="https://github.com/yogeshpriyadarshi" target="_blank">
                {" "}
                <img
                  src="assets/Contacts/Github.png"
                  className="h-15 w-15 rounded-full"
                />{" "}
              </a>
              <a>
                {" "}
                <img
                  src="assets/Contacts/LinkedIN.webp"
                  className="h-15 w-15 rounded-full"
                />{" "}
              </a>  </div>
            </div>
            <div className="text-center text-white p-10 " > Made with Heart in India </div>
        </div> 
    
    
    
    </>
  )
}
