import * as S from './Modal.styles';
import { ReactNode, useContext } from 'react';
import IconButton from '../IconButton/IconButton';
import { EType } from '../IconButton/IconButton.types';
import ScreenContext from '../../context/screenContext';

interface IProps {
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  children: ReactNode;
}

export default function Modal(props: IProps) {
  const { showModal, setShowModal, children } = props;
  const { setScreen } = useContext(ScreenContext);
  const clickOnClose = () => {
    document.body.style.overflow = 'scroll';
    setScreen(false);
    setShowModal(false);
  };
  return (
    showModal && (
      <S.ModalContainer>
        <S.ModalNavigation>
          <IconButton
            $size={16}
            onActionDoNext={clickOnClose}
            buttonType={EType.close}
          />
        </S.ModalNavigation>
        {children}
      </S.ModalContainer>
    )
  );
}
