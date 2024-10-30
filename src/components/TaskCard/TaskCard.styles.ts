import styled from 'styled-components';
import { EStatuses } from '../../utils/Task/Task.types';

export enum EIconButtonType {
  Delete,
  Edit,
}

export const TaskCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  padding: 20px;
  flex: 0 0 auto;
`;

export const TaskCardInfoField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TaskCardTitle = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  & + label::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &:checked + label::before {
    border-color: ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors.purple};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
`;

export const TaskCardTitleLabel = styled.label<{ $status: EStatuses }>`
  font-size: 20px;
  font-weight: 500;
  text-decoration: ${(props) =>
    props.$status === EStatuses.Complete ? 'line-through' : 'none'};
  color: ${({ theme }) => theme.colors.black};
  opacity: ${(props) => (props.$status === EStatuses.Complete ? '0.5' : '1')};
  width: 100%;
`;

export const TaskCardTitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const TaskCardTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const TaskCardTagContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const TaskCardLabel = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export const TaskCardTagLogo = styled.div<{ $status: EStatuses }>`
  width: 20px;
  height: 20px;
  background-color: ${({ theme, $status }) => {
    switch ($status) {
      case EStatuses.Deadline:
        return theme.colors.deadline;
      case EStatuses.InProgress:
        return theme.colors.in_progress;
      case EStatuses.Complete:
        return theme.colors.comp;
    }
  }};
  border-radius: 2px;
`;

export const TaskCardOptionsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-start;
`;

export const TaskCardOptionsButton = styled.button<{ $type: EIconButtonType }>`
  color: ${({ theme }) => theme.colors.grey};
  background: none;
  &:hover {
    color: ${({ theme, $type }) =>
      $type === EIconButtonType.Delete
        ? theme.colors.hover_red
        : theme.colors.purple};
  }
  & > svg {
    width: 20px;
    height: 100%;
  }
`;
