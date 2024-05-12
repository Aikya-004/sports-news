import { API_ENDPOINT } from '../../config/constants';
import { NewsActions } from './reducer';

export const fetchArticles = async (dispatch: React.Dispatch<NewsActions>) => {
  try {
    dispatch({ type: 'FETCH_NEWS_REQUEST' });
    const response = await fetch(`${API_ENDPOINT}/articles`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: data});
  } catch (error) {
    console.log('Error fetching articles:', error);
    dispatch({ type: 'FETCH_NEWS_FAILURE', payload: 'Unable to load articles' });
  }
};

export const fetchArticleById = async (dispatch: React.Dispatch<NewsActions>, articleId: number) => {
  try {
    dispatch({ type: 'FETCH_NEWS_REQUEST' });
    const response = await fetch(`${API_ENDPOINT}/articles/${articleId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    dispatch({ type: 'SELECT_ARTICLE', payload: data });
  } catch (error) {
    console.log('Error fetching article:', error);
    dispatch({ type: 'FETCH_NEWS_FAILURE', payload: 'Unable to load article' });
  }
};
