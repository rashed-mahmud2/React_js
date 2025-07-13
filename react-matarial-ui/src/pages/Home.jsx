import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [allLeague, setAllLeague] = useState([]);

  const fetchAllLeagueData = async () => {
    try {
      const response = await fetch(
        `https://www.thesportsdb.com/api/v1/json/123/all_leagues.php`
      );
      const data = await response.json();
      setAllLeague(data.leagues);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllLeagueData();
  }, []);

  return (
    <div className="text-center max-w-7xl mx-auto">
      <h1 className="text-5xl font-semibold">All Leagues</h1>
      <h2 className="text-3xl font-semibold my-5">
        Total League: {allLeague?.length}
      </h2>
      {allLeague?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {allLeague.map((singleLeague) => (
            <div
              className="bg-gray-300 shadow-lg p-3"
              key={singleLeague.idLeague}
            >
              <h3 className="text-2xl text-slate-700 font-semibold">
                {singleLeague.strLeague}
              </h3>
              <p className="text-xl text-slate-500 font-semibold">
                {singleLeague.strSport}
              </p>
              <Link
                className="bg-red-500 py-1 mt-3 px-3 rounded-md inline-block text-white "
                to={`/leagues/${singleLeague.strLeague}`}
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[400px] flex justify-center items-center">
          <h1 className="text-4xl">Loading....</h1>
        </div>
      )}
    </div>
  );
}
