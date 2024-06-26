import { API_ENDPOINT } from '../../config/constants';

export const fetchTeams = async (dispatch: any) => {
  try {
    dispatch({ type: 'FETCH_TEAMS_REQUEST' });
    const response = await fetch(`${API_ENDPOINT}/teams`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch teams');
    }
    const data = await response.json();
    dispatch({ type: 'FETCH_TEAMS_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error fetching teams:', error);
    dispatch({ type: 'FETCH_TEAMS_FAILURE', payload: 'Unable to fetch teams' });
  }
};
