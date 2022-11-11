import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import * as I from './interfaces';
import Home from './pages/Home';
import Market from './pages/Market';
import MarketDetail from './pages/MarketDetail';
import MarketRegister from './pages/MarketRegister';
import Asset from './pages/Asset';
import ItemDetail from './pages/ItemDetail';
import Dashboard from './pages/Dashboard';
import ErrorFallback from './pages/ErrorFallback';
import OuterContainer from './components/templates/OuterContainer';
import InnerContainer from './components/templates/InnerContainer';
import FooterContainer from './components/templates/FooterContainer';
import LocationDetector from './components/templates/LocationDetector';
import Footer from './components/organisms/Footer';
import { GlobalStyles } from './components/templates/GlobalStyles';
import { PATH } from './constants/path';
import { RootState } from './reducers';

declare global {
  interface Window {
    ethereum: I.EthereumProvider;
  }
}

export default function App() {
  const [web3, setWeb3] = useState<Web3>(null);
  const { configurations } = useSelector((state: RootState) => state.user);
  const { currentPathname } = useSelector((state: RootState) => state.path);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
      } catch (err) {
        console.error(err);
      }
    }

    sessionStorage.setItem(
      'jwt',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY3OTEwMTM4LCJleHAiOjMzMjI1NTEwMTM4fQ.-A4BBDngD4AJWTDmomVBAZXfmcQqovxWP_nVKolTFoI',
    );
  }, []);

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
              <Route path={PATH.MARKET_DETAIL} element={<MarketDetail />} />
              <Route path={PATH.MARKET_REGISTER} element={<MarketRegister />} />
              <Route path={PATH.ASSETS} element={<Asset />} />
              <Route path={PATH.ITEM_DETAIL} element={<ItemDetail />} />
              <Route path={PATH.DASHBOARD} element={<Dashboard />} />
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
