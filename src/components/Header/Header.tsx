import { generatePath } from 'react-router-dom';
import * as S from './Header.styles';
import DefaultRoutes from '../../routes/Routes';
import { FaChartArea, FaCircleUser, FaComment, FaDoorOpen } from 'react-icons/fa6';
import { useAuth } from '../../context/AuthHooks';
import * as C from '../../styles/components';

export default function Header() {
  const { auth } = useAuth();
  return (
    <S.Header>
      <S.LogoContainer to={generatePath(DefaultRoutes.home)}>
        <FaChartArea />
      </S.LogoContainer>
      <S.Nav>
        {auth === null ? (
          <>
            <S.LogoContainer to={generatePath(DefaultRoutes.authorization)}>
              <FaCircleUser />
            </S.LogoContainer>
            <S.LogoContainer to={generatePath(DefaultRoutes.registration)}>
              <FaComment />
            </S.LogoContainer>
          </>
        ) : (
          <>
            <C.Text $size={16} $weight={500}>
              Hello, {auth}
            </C.Text>
            <S.LogoContainer to={generatePath(DefaultRoutes.logout)}>
              <FaDoorOpen />
            </S.LogoContainer>
          </>
        )}
      </S.Nav>
    </S.Header>
  );
}
