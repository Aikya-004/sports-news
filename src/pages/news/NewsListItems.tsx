/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useNewsState, useNewsDispatch } from '../../context/news/context';
import { fetchArticles } from '../../context/news/actions';
import {
  useSportsState,
  useSportsDispatch,
} from '../../context/sports/context';
import { fetchSports } from '../../context/sports/actions';
import { Link } from 'react-router-dom';
import { News } from '../../context/news/reducer';
import { Sport } from '../../context/sports/reducer';

const NewsListItems: React.FC = () => {
  const newsState = useNewsState();
  const newsDispatch = useNewsDispatch();
  const sportsState = useSportsState();
  const sportsDispatch = useSportsDispatch();

  useEffect(() => {
    fetchArticles(newsDispatch);
    fetchSports(sportsDispatch);
  }, [newsDispatch, sportsDispatch]);

  if (!newsState || !sportsState) {
    return <div>Loading...</div>; // Handle loading state
  }

  const { articles, isLoading, isError, errorMessage } = newsState;
  const { sports } = sportsState;

  const [selectedSport, setSelectedSport] = useState<string | null>('');
  const [isScrolling, setScrolling] = useState(false);

  const filterArticles = () => {
    if (!articles) return [];
    if (selectedSport === '') {
      return articles;
    }
    if (selectedSport === 'Trending') {
      const latestArticles: News[] = [];
      sports.forEach((sport: Sport) => {
        const sportArticles = articles.filter(
          (article: News) => article.sport.name === sport.name
        );
        if (sportArticles.length > 0) {
          sportArticles.sort(
            (a: News, b: News) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          latestArticles.push(sportArticles[0]);
        }
      });
      return latestArticles.slice(0, 7);
    }
    return articles.filter(
      (article: News) => article.sport.name === selectedSport
    );
  };

  const filteredArticles = filterArticles();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-3/4 overflow-y-auto mr-10"
      style={{ maxHeight: 'calc(120vh - 200px)' }}
    >
      <div
        className={`sticky top-0 mb-2 bg-white z-10 ${isScrolling ? 'shadow-md' : ''}`}
      >
        <div className="flex space-x-3" style={{ color: 'black' }}>
          <button
            className="py-2 px-4 rounded-full bg-gray-100"
            onClick={() => setSelectedSport('Trending')}
          >
            TRENDING
          </button>
          {sports.map((sport: Sport) => (
            <button
              key={sport.id}
              className={`py-2 px-4 rounded-full bg-gray-100 ${selectedSport === sport.name ? 'bg-blue-700 text-white' : ''}`}
              onClick={() => setSelectedSport(sport.name)}
            >
              {sport.name}
            </button>
          ))}
        </div>
      </div>
      {filteredArticles.length === 0 && isLoading ? (
        <span className="text-black-600">Loading...</span>
      ) : isError ? (
        <span>{errorMessage}</span>
      ) : (
        filteredArticles.map((article: News) => (
          <div
            key={article.id}
            className="w-full flex items-center mb-4 border-4 border-black-400 rounded-xl p-4"
          >
            <div className="w-3/4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600">{article.summary}</p>
              <p className="text-left text-gray-500 block mt-0">
                {new Date(article.date).toLocaleDateString()}
              </p>
              <Link
                to={`/account/dashboard/articles/${article.id}`}
                className="text-center text-blue-500 block mt-0"
              >
                Read more
              </Link>
            </div>
            <div className="w-1/4">
              <p className="text-gray-500 text-center">{article.sport.name}</p>
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NewsListItems;
