import React, { Suspense } from 'react';
const MatchList = React.lazy(() => import('./MatchList'));
import ErrorBoundary from '../../components/ErrorBoundary';

const Matches = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Matches
        </h2>
      </div>
      <ErrorBoundary>
        <Suspense
          fallback={<div className="suspense-loading">Loading Matches...</div>}
        >
          <MatchList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Matches;
