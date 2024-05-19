import React, { createContext, useContext, useReducer } from 'react';
import { reducer, initialState, MatchActions, MatchState } from './reducer';
const MatchContext = createContext<MatchState | undefined>(undefined);

// Define useMatchState custom hook
export const useMatchState = () => useContext(MatchContext);
const MatchDispatchContext = createContext<
  React.Dispatch<MatchActions> | undefined
>(undefined);

// Define useMatchDispatch custom hook
export const useMatchDispatch = () => useContext(MatchDispatchContext);

export const MatchContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MatchContext.Provider value={state}>
      <MatchDispatchContext.Provider value={dispatch}>
        {children}
      </MatchDispatchContext.Provider>
    </MatchContext.Provider>
  );
};
