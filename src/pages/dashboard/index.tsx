import React from 'react';
import MatchListItems from './MatchListItems';
// import SportTeamFilter from './SportTeamFilter'
import { Outlet } from 'react-router-dom';
import NewsListItems from '../news/NewsListItems'; 
const Dashboard: React.FC = () => {
  return (
    <div>
      <Outlet />
     <MatchListItems/>
     <NewsListItems/>
     {/* <SportTeamFilter/> */}
    </div>
  );
};

export default Dashboard;
