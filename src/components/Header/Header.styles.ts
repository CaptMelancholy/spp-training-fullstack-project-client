import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.purple};
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  & > svg {
    fill: ${({theme}) => theme.colors.primary};
    width: 100%;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  & > svg {
    fill: ${({theme}) => theme.colors.primary};
    width: 100%;
    height: 100%;
  }
`;
