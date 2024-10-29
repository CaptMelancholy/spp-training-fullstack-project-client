import styled from 'styled-components';

export const TaskHeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const TaskHeaderSearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TaskHeaderSearchBar = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.purple};
  font-family: inherit;
  font-size: 16px;
  padding: 20px;
  width: 100%;
  &::placeholder {
    font-family: inherit;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const TaskHeaderSearchBarIcon = styled.div`
  position: absolute;
  right: 10px;
  pointer-events: none;
  & > svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const TaskAddNewButton = styled.button`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 18px;
`;

export const TaskHeaderFilterContainer = styled.div`
  display: flex;
`;

export const TaskHeaderFilter = styled.select`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.primary};
  font-family: inherit;
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 18px;
  min-width: 100%;
  cursor: pointer;
`;

export const TaskHeaderFilterOptions = styled.option`
  font-size: 18px;
  font-family: var(--primary-family);
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.primary};
  &:active {
    background-color: ${({ theme }) => theme.colors.purple_active};
  }
`;
