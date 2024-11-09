import { ReactNode } from 'react';

import * as S from './styles';
import ScreenBlock from '../components/ScreenBlock/ScreenBlock';
import Header from '../components/Header/Header';

interface IProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: IProps) {
  return (
    <>
      <ScreenBlock />
      <Header />
      <S.Layout>{children}</S.Layout>
    </>
  );
}
