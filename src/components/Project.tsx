export default function Project() {
  return (
    <>
      <section id="project" className="min-h-screen pt-15 md:flex text-white">
        <div className="flex-9/13">
          <div className="flex justify-center text-3xl m-2"> Major Project</div>

          <div className="flex flex-col justify-center items-center m-2">
            <div className="bg-red-500 text-black p-3 rounded-2xl w-2/3">
              <h1 className="text-center text-2xl"> Netflix-Clone </h1>
              <ul className="list-disc p-5">
                <li>
                  {" "}
                  Interative UI is developed by using React and Tailwind CSS.
                </li>
                <li>
                  {" "}
                  Firebase is used as backend for storing data and user
                  authentication.{" "}
                </li>
                <li>
                  {" "}
                  TMBD is used as third party API. Trailer of latest movie is
                  shown. List of Popular, Top rated and upcoming movies are
                  shown.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2">
            <div className="bg-red-500 text-black p-3 rounded-2xl w-2/3">
              <h1 className="text-center text-2xl"> Dev-Tinder </h1>
              <ul className="list-disc p-5">
                <li>
                  Implemented user signup, login, and logout functionality using
                  JWT authentication and secure password hashing (bcrypt).
                </li>
                <li>
                  {" "}
                  Designed and built connection request system allowing users to
                  send, accept, or reject friend requests.{" "}
                </li>
                <li>
                  Developed RESTful APIs with Node.js and Express for user
                  management and connection handling.
                </li>
                <li>
                  {" "}
                  Managed and stored user data and connection status using
                  MongoDB Atlas{" "}
                </li>
                <li>
                  {" "}
                  Created a responsive and clean UI with React, styled using
                  Tailwind CSS and semantic HTML.
                </li>
                <li>
                  {" "}
                  Applied conditional rendering to reflect connection statuses
                  (pending, accepted, denied) in real time.
                </li>
                <li>
                  {" "}
                  Added private live chat functionality allowing two users to
                  chat in real time.{" "}
                </li>
                <li>
                  {" "}
                  Used Socket.IO to manage real time messaging and connection
                  events.{" "}
                </li>
                <li>
                  {" "}
                  Ensured seamless communication with room-based socket
                  architecture.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-4/13">
          <div className="flex justify-center text-3xl m-2">
            {" "}
            Minor Project{" "}
          </div>
          <div className="flex flex-col justify-center items-center m-2">
            <div className="bg-red-500 text-black p-3 rounded-2xl w-2/3">
              <h1 className="text-center text-2xl"> Do It: Diary </h1>
              <ul className="list-disc p-5">
                <li>
                  {" "}
                  It is full stack Application where user can login, sin up and
                  Logout. User can generate to do list and give point according
                  to performance.
                </li>
                <li>
                  {" "}
                  There is journal page where user can write about a day. User
                  can set custom target where they can mention starting date and
                  ending date for target. Each day, user can upload activity
                  pertaining to target.{" "}
                </li>
                <li>
                  {" "}
                  HTML, CSS, JavaScript, React, Node.js and MySQL are used for
                  developing Application.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center m-2">
            <div className="bg-red-500 text-black p-3 rounded-2xl w-2/3">
              <h1 className="text-center text-2xl"> Multiuser Live Chat </h1>
              <ul className="list-disc p-5">
                <li> Built a real time multi user chat app using Socket.IO</li>
                <li>
                  {" "}
                  allowing multiple users to join and chat in a shared room
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
