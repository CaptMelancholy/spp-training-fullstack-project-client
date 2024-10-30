import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  padding: 20px;
  z-index: 200;
`;

export const ModalTitle = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ModalNavigation = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
`;

export const ModalFormField = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;
