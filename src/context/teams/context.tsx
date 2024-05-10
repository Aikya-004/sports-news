import React, { createContext, useContext, useReducer } from 'react';
import { teamReducer, initialTeamState, TeamActions, TeamState } from './reducer';

const TeamsStateContext = createContext<TeamState | undefined>(undefined);
type TeamDispatch = React.Dispatch<TeamActions>;
const TeamsDispatchContext = createContext<TeamDispatch| undefined>(undefined);

export const TeamsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(teamReducer, initialTeamState);
  
    return (
      <TeamsStateContext.Provider value={state}>
        <TeamsDispatchContext.Provider value={dispatch}>{children}</TeamsDispatchContext.Provider>
      </TeamsStateContext.Provider>
    );
  };
  
  export const useTeamsState = () => useContext(TeamsStateContext);
  export const useTeamsDispatch = () => useContext(TeamsDispatchContext);