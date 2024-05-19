export interface News {
  id: number;
  title: string;
  summary: string;
  thumbnail: string;
  content: string;
  date: string;
  teams: { id: number; name: string }[];
  sport: { id: number; name: string };
}

export interface NewsState {
  articles: News[];
  selectedArticle: News | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const initialState: NewsState = {
  articles: [],
  selectedArticle: null,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export type NewsActions =
  | { type: 'FETCH_NEWS_REQUEST' }
  | { type: 'FETCH_NEWS_SUCCESS'; payload: News[] }
  | { type: 'FETCH_NEWS_FAILURE'; payload: string }
  | { type: 'SELECT_ARTICLE'; payload: News | null };

export const newsReducer = (
  state: NewsState = initialState,
  action: NewsActions
): NewsState => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        isLoading: false,

        articles: action.payload,
      };
    case 'FETCH_NEWS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case 'SELECT_ARTICLE':
      return {
        ...state,
        selectedArticle: action.payload,
      };

    default:
      return state;
  }
};
