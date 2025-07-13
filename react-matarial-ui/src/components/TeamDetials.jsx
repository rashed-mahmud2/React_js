import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function TeamDetials() {
  const { name } = useParams();
  const [teamData, setTeamData] = useState([]);

  const getTeamData = async () => {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${name}`
    );
    const data = await response.json();
    const teamData = data.teams;
    setTeamData(teamData[0]);
  };

  useEffect(() => {
    getTeamData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-5">
      <div>
        <h1 className="text-3xl font-semibold text-slate-600">
          <Link to={"/leagues"}>
            <span className="hover:underline">Leagues</span>
          </Link>{" "}
          /{" "}
          <Link to={`/leagues/${teamData.strLeague}`}>
            <span className="hover:underline">Team Lists</span>
          </Link>{" "}
          / <span>{teamData.strTeamAlternate}</span>
        </h1>
      </div>
      <div>
        <div className="mt-5">
          <h1 className="text-xl text-gray-600 font-medium mt-2">
            <span className="underline font-bold">Team Name:</span>{" "}
            {teamData.strTeam}
          </h1>
          <h3 className="text-xl text-gray-600 font-medium mt-2">
            <span className="underline font-bold">Club Name:</span>{" "}
            {teamData.strTeamAlternate}
          </h3>
          <h3 className="text-xl text-gray-600 font-medium mt-2">
            <span className="underline font-bold">Stadiam:</span>{" "}
            {teamData.strStadium}
          </h3>
          <h3 className="text-xl text-gray-600 font-medium mt-2">
            <span className="underline font-bold">Location:</span>{" "}
            {teamData.strLocation}
          </h3>
          <h3 className="text-xl text-gray-600 font-medium mt-2">
            <span className="underline font-bold">Country:</span>{" "}
            {teamData.strCountry}
          </h3>
          <h3 className="text-xl text-gray-600 font-medium mt-2">
            <span className="underline font-bold">Formed Year:</span>{" "}
            {teamData.intFormedYear}
          </h3>
          <h3 className="text-xl text-gray-600 font-medium mt-2">
            <span className="underline font-bold">League Name:</span>{" "}
            {teamData.strLeague}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-7">
          <img
            src={teamData.strFanart2}
            alt={teamData.strTeamAlternate}
            className="bg-white hover:scale-105 transition-all duration-300"
          />
          <img
            src={teamData.strFanart1}
            alt={teamData.strTeamAlternate}
            className="bg-white hover:scale-105 transition-all duration-300"
          />
          <img
            src={teamData.strFanart3}
            alt={teamData.strTeamAlternate}
            className="bg-white hover:scale-105 transition-all duration-300"
          />
          <img
            src={teamData.strFanart4}
            alt={teamData.strTeamAlternate}
            className="bg-white hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div>
        <p className=" mt-7">
          <span className="underline font-bold">Description</span>:{" "}
          {teamData.strDescriptionEN}
        </p>
      </div>
    </div>
  );
}
