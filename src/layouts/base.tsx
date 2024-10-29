import { ReactNode } from 'react';

import * as S from './styles';
import ScreenBlock from '../components/ScreenBlock/ScreenBlock';

interface IProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  return (
    <>
      <ScreenBlock />
      <S.Layout>{children}</S.Layout>
    </>
  );
}
