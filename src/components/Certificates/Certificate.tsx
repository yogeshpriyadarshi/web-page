import JavaScript from "./JavaScript"
import Node from "./Node";
import React from "./React";

export default function Certificate() {
  return (
    <>
      <section id="certificate">
        <h1 className="text-center text-white text-3xl p-15 m-2">
          {" "}
          My <span className="text-red-500"> Certificate </span>{" "}
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          <JavaScript />

          <React />

          <Node />

        </div>
      </section>
    </>
  );
}
