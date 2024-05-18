import React, { Suspense } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';

// Lazy load the NewsList component
const NewsList = React.lazy(() => import('./NewsList'));

const News: React.FC = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          News
        </h2>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading News...</div>}>
          <NewsList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default News;
