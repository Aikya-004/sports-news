import React from 'react';
import NewsListItems from './NewsListItems';

const NewsList: React.FC = () => {
  return (
    <div className="grid gap-10 grid-cols-0 mt-4">
      <h2>News</h2>
      <NewsListItems />
    </div>
  );
};

export default NewsList;
