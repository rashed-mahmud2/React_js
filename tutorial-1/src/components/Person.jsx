import React from "react";

export default function Person({ name, count, newCount }) {
  return (
    <div className=" p-5">
      <h1 className="p-2 m-3 text-white bg-amber-500">Person name: {name}</h1>
      <p className=" p-2 m-3 text-white bg-amber-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        odit vero eos maxime facere neque minima facilis reiciendis hic ex!
      </p>
      <a
        className=" bg-red-600 text-white rounded-md p-2 hover:bg-red-500 hover:scale-105 inline-block m-5"
        href="/"
      >
        Back to Home
      </a>
      <h3 className="text-3xl font-semibold">Count : {count}</h3>
      <h3 className="text-2xl font-semibold">NewCount: {newCount}</h3>
    </div>
  );
}
