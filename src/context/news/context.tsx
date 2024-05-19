import React, { createContext, useContext, useReducer } from 'react';
import { NewsState, NewsActions, newsReducer, initialState } from './reducer';

// Define the context for news state
const NewsStateContext = createContext<NewsState | undefined>(undefined);
// Define a custom hook to access the news state
export const useNewsState = () => useContext(NewsStateContext);
type NewsDispatch = React.Dispatch<NewsActions>;
const NewsDispatchContext = createContext<NewsDispatch | undefined>(undefined);

// Define a custom hook to access the news dispatch function
export const useNewsDispatch = () => useContext(NewsDispatchContext);

// Define the NewsContextProvider component
export const NewsContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Use reducer to manage the news state
  const [state, dispatch] = useReducer(newsReducer, initialState);

  return (
    <NewsStateContext.Provider value={state}>
      <NewsDispatchContext.Provider value={dispatch}>
        {children}
      </NewsDispatchContext.Provider>
    </NewsStateContext.Provider>
  );
};
