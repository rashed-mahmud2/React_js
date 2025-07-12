import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function RicknMorty() {
  const [character, setCharacter] = useState([]);
  const nagivate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const data = await res.json();
      const character = data.results;
      console.log(character);
      setCharacter(character);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className=" text-3xl font-semibold text-center my-6">
        Total character : {character.length}
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {character.map((singleCharacter) => (
          <div
            onClick={() => nagivate(`/character/${singleCharacter.id}`)}
            className=" bg-gray-700 w-[300px] h-fit  text-white text-center hover:scale-105 transition-all duration-300 shadow-md"
            key={singleCharacter.id}
          >
            <img src={singleCharacter.image} alt={singleCharacter.name} />
            <div className="p-2">
              <h3 className="text-2xl line-clamp-1">
                Name: {singleCharacter.name}
              </h3>
              <p
                className={`p-2 m-2 ${
                  singleCharacter.status === "Alive"
                    ? "bg-green-600"
                    : "bg-red-600"
                }`}
              >
                Alive or Not: {singleCharacter.status}
              </p>
              <p
                className={`p-2 m-2 ${
                  singleCharacter.species === "Human"
                    ? "bg-blue-500"
                    : "bg-yellow-500"
                }`}
              >
                Human or Alien: {singleCharacter.species}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
