import React from 'react';
import MatchListItems from './MatchListItems';

const MatchList: React.FC = () => {
  return (
    <div className="grid gap-10 grid-cols-0 mt-4">
      <h2>Matches</h2>
      <MatchListItems />
    </div>
  );
};

export default MatchList;
