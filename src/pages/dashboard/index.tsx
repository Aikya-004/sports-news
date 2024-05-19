import React from 'react';
import MatchListItems from './MatchListItems';
import SportTeamFilter from './SportTeamFilter';
import { Outlet } from 'react-router-dom';
import NewsListItems from '../news/NewsListItems';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', marginRight: '16px' }}>
        <Outlet />
        <MatchListItems />
        <NewsListItems />
      </div>
      <div style={{ flex: '2', marginTop: '680px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <SportTeamFilter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
