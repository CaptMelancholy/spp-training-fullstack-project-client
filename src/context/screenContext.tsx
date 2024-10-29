import { createContext } from 'react';

interface IScreenContextHandler {
    screen: boolean;
    setScreen: (screen: boolean) => void;
}

export const ScreenContext = createContext<IScreenContextHandler>({
    screen: false,
    setScreen: () => {},
});

export default ScreenContext;