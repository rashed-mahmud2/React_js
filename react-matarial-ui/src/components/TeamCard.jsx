import React from "react";
import { Link } from "react-router";

export default function TeamCard({ singleLeagueData }) {
  console.log(singleLeagueData);

  return (
    <div className="shadow-lg hover:shadow-2xl rounded-md hover:scale-105 transition-all duration-200 bg-slate-100">
      <img
        src={singleLeagueData.strFanart1}
        alt={singleLeagueData.strTeamAlternate}
        className="rounded-t-md"
      />
      <div className="p-3">
        <h1 className="text-xl">{singleLeagueData.strTeamAlternate}</h1>
        <h3 className="text-gray-500">{singleLeagueData.strLocation}</h3>

        <h3 className="text-gray-500">
          Countrty: {singleLeagueData.strCountry}
        </h3>
        <Link
          className="bg-red-500 py-2 px-3 rounded-md text-white mt-5 inline-block mb-0"
          to={`/leagues/${singleLeagueData}/${singleLeagueData.strTeam}`}
        >
          See Details
        </Link>
      </div>
    </div>
  );
}
