import styled from 'styled-components';

export const Layout = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  min-height: 0;
  flex: 0 1;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  
`;
