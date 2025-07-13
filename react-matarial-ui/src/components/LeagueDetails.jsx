import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import TeamCard from "./TeamCard";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function LeagueDetails() {
  const { name } = useParams();
  const [leagueData, setLeagueData] = useState([]);

  const getLeagueData = async () => {
    try {
      const response = await fetch(
        `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${name}`
      );
      const data = await response.json();
      setLeagueData(data.teams);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLeagueData();
  }, []);

  return (
    <div>
      <button className="text-xl font-medium text-white/90 bg-black/90 py-2 px-3 mt-5 ms-5 rounded-md">
        <Link to={"/leagues"} className="flex gap-2 items-center">
          <MdOutlineArrowBackIos />
          <span className="hover:underline">Back to Leagues</span>
        </Link>
      </button>
      <h1 className="text-5xl uppercase text-center font-semibold text-slate-600 mt-5">
        {name}
      </h1>
      <h2 className="text-3xl text-center font-semibold text-slate-600 mt-5">
        Total Team Number: {leagueData?.length}
      </h2>
      <div>
        {leagueData?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto mt-10 gap-5">
            {leagueData?.map((singleLeagueData) => (
              <TeamCard
                key={singleLeagueData.idTeam}
                singleLeagueData={singleLeagueData}
              />
            ))}
          </div>
        ) : (
          <div className="h-[400px] flex items-center justify-center">
            <h2 className="text-4xl font-semibold">Loading......</h2>
          </div>
        )}
      </div>
    </div>
  );
}
