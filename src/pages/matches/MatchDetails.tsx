/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMatchDispatch, useMatchState } from '../../context/matches/context';
import { fetchMatchById } from '../../context/matches/actions';
import { Dialog } from '@headlessui/react';

const MatchDetails: React.FC = () => {
  const matchState = useMatchState();
  const matchDispatch = useMatchDispatch();
  const { matchId } = useParams<{ matchId?: string }>() || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (matchId) {
      console.log('Fetching match with ID:', matchId);
      fetchMatchById(matchDispatch, parseInt(matchId))
        .then(() => console.log('Match fetched successfully'))
        .catch((error) => console.error('Error fetching match:', error));
    }
  }, [matchId, matchDispatch]);

  // Handle the case where matchState might be undefined
  const { selectedMatch } = matchState || { selectedMatch: undefined };

  console.log('Selected Match:', selectedMatch);

  const [isOpen, setIsOpen] = useState(true);

  if (!selectedMatch) {
    console.log('No match selected or not found.');
    return <div>No match selected or not found.</div>;
  }

  const closeDialogAndNavigate = () => {
    setIsOpen(false);
    navigate('/account/dashboard'); // Navigate to the matches page
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Date(dateString).toLocaleTimeString('en-US', options);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={closeDialogAndNavigate}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Panel className="fixed inset-0 bg-black opacity-30" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block h-full w-full max-w-2xl p-4 my-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            style={{ color: 'black' }}
          >
            <h2 className="nws-dtl-hdln font-bold">{selectedMatch.name}</h2>
            <p className="text-sm text-gray-500 mt-2">
              {selectedMatch.location}
            </p>
            <p className="text-sm mt-2">
              Starts At: {formatDate(selectedMatch.startsAt)},{' '}
              {formatTime(selectedMatch.startsAt)}
            </p>
            <p className="text-sm mt-2">
              Ends At: {formatDate(selectedMatch.endsAt)},{' '}
              {formatTime(selectedMatch.endsAt)}
            </p>
            <p className="text-sm mt-2">Sport: {selectedMatch.sportName}</p>
            <p className="text-sm mt-2">
              Teams:{' '}
              {selectedMatch.teams
                .map((team: { name: any }) => team.name)
                .join(' vs ')}
            </p>
            <p className="text-sm mt-4 text-gray-500">Score:</p>
            <ul className="text-sm">
              {selectedMatch.score &&
                Object.entries(selectedMatch.score).map(([team, score]) => (
                  <li key={team}>
                    {team}: {String(score)}
                  </li>
                ))}
            </ul>
            <p className="text-sm mt-4 text-gray-500">Story:</p>
            <p className="text-sm mt-2">{selectedMatch.story}</p>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={closeDialogAndNavigate}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default MatchDetails;
