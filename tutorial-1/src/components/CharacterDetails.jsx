import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function CharacterDetails() {
  const [singleCharacter, setSingleCharacter] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getSingleCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const singleCharacter = await response.json();

    console.log(singleCharacter);
    setSingleCharacter(singleCharacter);
  };

  useEffect(() => {
    getSingleCharacter();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="flex items-center justify-center gap-20 border-2 border-slate-200 p-3">
        <div>
          <img
            className=" hover:scale-105 transition-all duration-300"
            src={singleCharacter.image}
            alt={singleCharacter.name}
          />
        </div>
        <div className=" space-y-2">
          <h1 className="text-4xl font-semibold text-slate-100">
            Name: {singleCharacter.name}
          </h1>
          <h3 className="text-xl font-semibold text-gray-300">
            Gender: {singleCharacter.gender}
          </h3>
          <h3
            className={`text-xl p-2 w-fit rounded-md font-semibold text-gray-300 ${
              singleCharacter.status === "Alive" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            Status: {singleCharacter.status}
          </h3>
          <h3
            className={`text-xl p-2 w-fit rounded-md font-semibold text-gray-300 ${
              singleCharacter.species === "Human"
                ? "bg-blue-500"
                : "bg-yellow-500"
            }`}
          >
            Species: {singleCharacter.species}
          </h3>
          <Link
            className="bg-red-500 inline-block mt-3 rounded-md py-2 px-4 shadow-lg text-white"
            to={"/"}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
