import DevTinder from "./DevTinder";
import DoIt from "./DoIt";
import LiveChat from "./LiveChat";
import Netflix from "./Netflix";
import RockPaperScissors from "./RockPaperScissors";
import TicTackToe from "./TicTackToe";

export default function Projects() {
  return (
    <>
      <div id="project">
        <h1 className=" text-4xl text-center text-white m-5">
          {" "}
          My <span className="text-red-500 "> Projects</span>
        </h1>
        <div className="grid grid-cols-3 gap-5 place-items-center">
          <DevTinder />
          <Netflix />
          <TicTackToe />
          <LiveChat />
          <DoIt />
          <RockPaperScissors />
        </div>
      </div>
    </>
  );
}
