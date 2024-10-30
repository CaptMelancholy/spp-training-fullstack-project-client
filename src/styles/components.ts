import styled from 'styled-components';

export enum EButtonType {
  fill,
  empty,
}

export const PageTitle = styled.h2`
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Button = styled.button<{ $buttonType: EButtonType }>`
  color: ${({ theme, $buttonType }) =>
    $buttonType === EButtonType.empty
      ? theme.colors.purple
      : theme.colors.primary};
  background-color: ${({ theme, $buttonType }) =>
    $buttonType === EButtonType.empty
      ? theme.colors.primary
      : theme.colors.purple};
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 5px;
  width: 150px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  padding: 5px 15px;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.purple};
  font-family: inherit;
  font-size: 16px;
  padding: 20px;
  width: 100%;
  &::placeholder {
    font-family: inherit;
    opacity: 0.75;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const Error = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
`;

export const Text = styled.p<{
  $weight: number;
  $size: number;
  $color?: string;
}>`
  font-size: ${(props) => `${props.$size}px`};
  font-weight: ${(props) => `${props.$weight}`};
  color: ${(props) =>
    props.$color ? props.$color : props.theme.colors.black};
`;

