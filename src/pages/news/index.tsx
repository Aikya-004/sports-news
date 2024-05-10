import React from 'react';
import NewsList from './NewsList';

const News: React.FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          News
        </h2>
      </div>
      <NewsList />
    </>
  );
};

export default News;
