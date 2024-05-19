export interface Team {
  id: number;
  name: string;
}

export interface TeamState {
  teams: Team[];
  selectedTeam: Team | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const initialTeamState: TeamState = {
  teams: [],
  selectedTeam: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export type TeamActions =
  | { type: 'FETCH_TEAMS_REQUEST' }
  | { type: 'FETCH_TEAMS_SUCCESS'; payload: Team[] }
  | { type: 'FETCH_TEAMS_FAILURE'; payload: string }
  | { type: 'SELECT_TEAM'; payload: Team | null };

export const teamReducer = (
  state: TeamState = initialTeamState,
  action: TeamActions
): TeamState => {
  switch (action.type) {
    case 'FETCH_TEAMS_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_TEAMS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        teams: action.payload,
      };
    case 'FETCH_TEAMS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case 'SELECT_TEAM':
      return {
        ...state,
        selectedTeam: action.payload,
      };
    default:
      return state;
  }
};
