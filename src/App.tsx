import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import * as API from './apis';
import * as I from './interfaces';
import Home from './pages/Home';
import Market from './pages/Market';
import MarketDetail from './pages/MarketDetail';
import MarketRegister from './pages/MarketRegister';
import MarketHistory from './pages/MarketHistory';
import MarketHistoryDetail from './pages/MarketHistoryDetail';
import ItemDetail from './pages/ItemDetail';
import Dashboard from './pages/Dashboard';
import SearchResult from './pages/SearchResult';
import ErrorFallback from './pages/ErrorFallback';
import OuterContainer from './components/templates/OuterContainer';
import InnerContainer from './components/templates/InnerContainer';
import FooterContainer from './components/templates/FooterContainer';
import LocationDetector from './components/templates/LocationDetector';
import Footer from './components/organisms/Footer';
import { GlobalStyles } from './components/templates/GlobalStyles';
import { PATH } from './constants/path';
import { RootState } from './reducers';
import { setUser } from './reducers/user.reducer';

declare global {
  interface Window {
    ethereum: I.EthereumProvider;
  }
}

const userTokens = [
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3OTU2MDMxLCJleHAiOjMzMjI1NTU2MDMxfQ.t9odr3sxIAGNI75l6NFzg4Pm3YKyll0sECYQ_WoV4vg',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY3OTU2MDUxLCJleHAiOjMzMjI1NTU2MDUxfQ.53nskwqJO7etEsQ0GJKEWDJzCfbkhI0CRtZ8hE4JNwQ',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY3OTU2MDYzLCJleHAiOjMzMjI1NTU2MDYzfQ.f3EHkluagJCPz5Pi5a7fkBGWnopWTkWZwFOUTo_L_kg',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjY3OTU2MDc3LCJleHAiOjMzMjI1NTU2MDc3fQ.bvIBhieQ4p0cjRz9Yv0Y-fgfOst9bGvSP9ozzkaUAjA',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjY3OTU2MDkwLCJleHAiOjMzMjI1NTU2MDkwfQ.cUpFp3VOQ7uWFDPRa3VHkmkCuQRpYpGOxdEgUT4jk_Q',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY3OTU2MTAzLCJleHAiOjMzMjI1NTU2MTAzfQ.JFn1BNt_4uSC-Z63W2xVHiukt7ZYkeXJ1FLg0llmfjQ',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjY3OTU2MTM4LCJleHAiOjMzMjI1NTU2MTM4fQ.6sqMKewK_jQOSorNfNZR8qQUHIBb_dat3P4v-6inMgE',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjY3OTU2MTYxLCJleHAiOjMzMjI1NTU2MTYxfQ.GIU54JYVdoTgcMhD9cG98W387MlXe142H3KO7mTBpk8',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjY3OTU2MTcyLCJleHAiOjMzMjI1NTU2MTcyfQ.EijITOOKYNREmumrS-vwVKxEsLTnvlQWc0q4VsXAcz8',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY2Nzk1NjE4MSwiZXhwIjozMzIyNTU1NjE4MX0.FMOJKJZSsqtxjrVfnFZSseLyBcLA3MlcYl9RU7tUCMA',
];

export default function App() {
  const dispatch = useDispatch();
  const { configurations } = useSelector((state: RootState) => state.user);
  const { currentPathname } = useSelector((state: RootState) => state.path);

  const [tokenTop, setTokenTop] = useState<number>(0);

  useEffect(() => {
    window.onkeydown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === 'u') {
        console.log('change user!');

        setTokenTop(prev => (prev === 9 ? 0 : prev + 1));
      }
    };

    sessionStorage.setItem('jwt', userTokens[tokenTop]);

    async function fetchData() {
      const [user, error] = await API.user.findOne();

      if (error) {
        console.log(error.data.error.reason);
      }

      dispatch(setUser({ user }));

      return;
    }

    fetchData();
  }, [dispatch, tokenTop]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GlobalStyles colorTheme={configurations.theme} />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <OuterContainer>
          <InnerContainer>
            <LocationDetector />
            <Routes>
              <Route path={PATH.HOME} element={<Home />} />
              <Route path={PATH.MARKET.PATH} element={<Market />} />
              <Route
                path={PATH.MARKET.REDIRECT}
                element={<Navigate to={PATH.MARKET.ALL} replace />}
              />
              <Route path={PATH.MARKET_DETAIL.PATH} element={<MarketDetail />} />
              <Route
                path={PATH.MARKET_DETAIL.REDIRECT}
                element={<Navigate to={PATH.HOME} replace />}
              />
              <Route path={PATH.MARKET_HISTORY.LIST} element={<MarketHistory />} />
              <Route path={PATH.MARKET_HISTORY.DETAIL} element={<MarketHistoryDetail />} />
              <Route path={PATH.MARKET_REGISTER} element={<MarketRegister />} />
              <Route path={PATH.ITEM_DETAIL.PATH} element={<ItemDetail />} />
              <Route
                path={PATH.ITEM_DETAIL.REDIRECT}
                element={<Navigate to={PATH.HOME} replace />}
              />
              <Route path={PATH.DASHBOARD} element={<Dashboard />} />
              <Route path={PATH.SEARCH_RESULT} element={<SearchResult />} />
              <Route
                path='*'
                element={<ErrorFallback error={new Error('404')} resetErrorBoundary={() => {}} />}
              />
            </Routes>
          </InnerContainer>
          {currentPathname === PATH.HOME && (
            <FooterContainer>
              <Footer />
            </FooterContainer>
          )}
        </OuterContainer>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
