import React from "react";
import { useMatchState } from "../../context/matches/context";
import { Link } from "react-router-dom";

const MatchListItems: React.FC = () => {
  const state: any = useMatchState();
  const { matches, isLoading, isError, errorMessage } = state;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <>
      {matches.map((match: any) => (
        <Link
          key={match.id}
          to={`/dashboard/match/${match.id}`}
          className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {match.name}
          </h5>
          <p className="mb-2 text-gray-600 dark:text-gray-300">Location: {match.location}</p>
          <p className="mb-2 text-gray-600 dark:text-gray-300">Ends at: {new Date(match.endsAt).toISOString()}</p>
          <div className="flex items-center">
            {/* Render thumbnail image for each team */}
            {match.teams.map((team: any) => (
              <img key={team.id} src={team.thumbnail} alt={team.name} className="w-12 h-12 rounded-full mr-2" />
            ))}
          </div>
        </Link>
      ))}
    </>
  );
};

export default MatchListItems;
