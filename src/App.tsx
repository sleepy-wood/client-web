import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ErrorFallback from './pages/ErrorFallback';
import OuterContainer from './components/templates/OuterContainer';
import InnerContainer from './components/templates/InnerContainer';
import { GlobalStyles } from './components/templates/GlobalStyles';
import { PATH } from './constants/path';
import { RootState } from './reducers';

export default function App() {
  const { configurations } = useSelector((state: RootState) => state.user);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GlobalStyles colorTheme={configurations.theme} />
      <OuterContainer>
        <InnerContainer>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path={PATH.HOME} element={<Home />} />
              <Route
                path='*'
                element={<ErrorFallback error={new Error('404')} resetErrorBoundary={() => {}} />}
              />
            </Routes>
          </BrowserRouter>
        </InnerContainer>
      </OuterContainer>
    </ErrorBoundary>
  );
}
