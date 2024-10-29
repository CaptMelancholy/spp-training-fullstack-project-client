import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyle from './styles/global';
import { useEffect, useMemo, useState } from 'react';
import ScreenContext from './context/screenContext';
import BaseLayout from './layouts/base';
import MainPage from './pages/Main/MainPage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { getTasks } from './store/thunks/tasks.thunk';

function App() {
  const [screen, setScreen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>()
  const contextValueScreen = useMemo(
    () => ({
      screen,
      setScreen,
    }),
    [screen, setScreen],
  );

  useEffect(() => {
    const getOurTasks = async() => {
      dispatch(getTasks());
    };
    getOurTasks();
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <ScreenContext.Provider value={contextValueScreen}>
        <GlobalStyle />
        <BaseLayout>
          <MainPage />
        </BaseLayout>
      </ScreenContext.Provider>
    </ThemeProvider>
  );
}

export default App;
