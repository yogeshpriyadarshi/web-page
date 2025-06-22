export default function Education() {
  return (
    <>
      <section id="education" className="text-white min-h-screen">
        <h1 className="text-center text-3xl text-red-500 m-2 p-15">
          {" "}
          Education{" "}
        </h1>
        <div className=" flex justify-around text-black">
          <div className="h-auto w-100 bg-red-200 rounded-2xl ">
            <h1 className="text-center text-3xl p-1"> Graducation </h1>
            <ol className="list-disc pl-10">
              <li> Session 2013-17</li>
              <li> Indian Institute of Technonlogy-ISM-Dhanbad</li>
              <li>B.tech: Honours in Mineral Engineering</li>
              <li> Minor in Computer Science</li>
            </ol>
          </div>
          <div className="h-auto w-100 bg-red-200 rounded-2xl ">
            <h1 className="text-center text-3xl p-1"> Intermideate </h1>
            <ol className="list-disc pl-10">
              <li> Session 2010-12</li>
              <li> ANS College, Barh</li>
              <li> Science: Maths, Physics, Chemistry</li>
            </ol>
          </div>
          <div className="h-auto w-100 bg-red-200 rounded-2xl ">
            <h1 className="text-center text-3xl p-1"> Class 10 </h1>
            <ol className="list-disc pl-10">
              <li> Session 2009-10</li>
              <li> Doon Academy, Barh</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
