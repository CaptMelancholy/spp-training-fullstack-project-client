import * as S from './Modal.styles';
import { ReactNode, useContext } from 'react';
import ScreenContext from '../../context/screenContext';
import * as C from '../../styles/components';

interface IProps {
  title: string;
  showModal: boolean;
  setShowModal: (flag: boolean) => void;
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $onSubmit?: any;
}

export default function Modal(props: IProps) {
  const { title, showModal, setShowModal, children, $onSubmit } = props;
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
          <S.ModalTitle>{title}</S.ModalTitle>
        </S.ModalNavigation>
        <S.ModalFormField onSubmit={$onSubmit}>
          {children}
          <S.ModalFooter>
            <C.Button
              $buttonType={C.EButtonType.empty}
              onClick={clickOnClose}
            >
              Cancel
            </C.Button>
            <C.Button
              $buttonType={C.EButtonType.fill}
              type='submit'
            >
              Apply
            </C.Button>
          </S.ModalFooter>
        </S.ModalFormField>
      </S.ModalContainer>
    )
  );
}
