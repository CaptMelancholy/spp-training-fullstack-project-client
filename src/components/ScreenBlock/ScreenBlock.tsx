import { ScreenBlockContainer } from './ScreenBlock.styles';
import { useContext } from 'react';
import ScreenContext from '../../context/screenContext';

export default function ScreenBlock() {
  const { screen } = useContext(ScreenContext);
  return <ScreenBlockContainer $show={screen} />
}
