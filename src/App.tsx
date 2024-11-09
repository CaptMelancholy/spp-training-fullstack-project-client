import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyle from './styles/global';
import { useMemo, useState } from 'react';
import ScreenContext from './context/screenContext';
import BaseLayout from './layouts/base';
import MainPage from './pages/Main/MainPage';
import { generatePath, Navigate, Route, Routes } from 'react-router-dom';
import DefaultRoutes from './routes/Routes';
import RegistrationPage from './pages/Main/RegistrationPage';
import AuthPage from './pages/Main/AuthPage';
import SuccessPage from './pages/Main/SuccessPage';
import ErrorPage from './pages/Main/ErrorPage';
import { AuthProvider } from './context/AuthContext';
import LogoutPage from './pages/Main/LogoutPage';

function App() {
  const [screen, setScreen] = useState<boolean>(false);
  
  const contextValueScreen = useMemo(
    () => ({
      screen,
      setScreen,
    }),
    [screen, setScreen],
  );

  return (
    <AuthProvider>
      <ThemeProvider theme={lightTheme}>
        <ScreenContext.Provider value={contextValueScreen}>
          <GlobalStyle />
          <BaseLayout>
            <Routes>
              <Route
                path='*'
                element={
                  <Navigate
                    to={generatePath(DefaultRoutes.error)}
                    replace
                  />
                }
              />
              <Route path={DefaultRoutes.default}>
                <Route
                  index
                  element={
                    <Navigate
                      to={DefaultRoutes.home}
                      replace
                    />
                  }
                />
                <Route
                  path={DefaultRoutes.home}
                  element={<MainPage />}
                />
                <Route
                  path={DefaultRoutes.registration}
                  element={<RegistrationPage />}
                />
                <Route
                  path={DefaultRoutes.authorization}
                  element={<AuthPage />}
                />
                <Route
                  path={DefaultRoutes.success}
                  element={<SuccessPage />}
                />
                <Route
                  path={DefaultRoutes.error}
                  element={<ErrorPage />}
                />
                <Route
                  path={DefaultRoutes.logout}
                  element={<LogoutPage />}
                />
              </Route>
            </Routes>
          </BaseLayout>
        </ScreenContext.Provider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
