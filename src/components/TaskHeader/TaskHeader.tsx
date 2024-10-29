import React, { useContext, useState } from 'react';
import * as S from './TaskHeader.styles';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { EStatuses } from '../../utils/Task/Task.types';
import { useTaskFilter } from '../../context/taskFilterHooks';
import ScreenContext from '../../context/screenContext';

export default function TaskHeader() {
  const { search, filter, setSearch, setFilter } = useTaskFilter();
  const [showModal, setShowModal] = useState(false);
  const { setScreen } = useContext(ScreenContext);
  
  const handleAddClick = () => {
    setShowModal(true);
    setScreen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      {/* MODAL */}
      <S.TaskHeaderContainer>
        <S.TaskHeaderSearchBarContainer>
          <S.TaskHeaderSearchBar
            type='text'
            placeholder='Enter search data...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.TaskHeaderSearchBarIcon>
            <FaMagnifyingGlass />
          </S.TaskHeaderSearchBarIcon>
        </S.TaskHeaderSearchBarContainer>
        <S.TaskHeaderFilterContainer>
          <S.TaskHeaderFilter
            value={filter || ''}
            onChange={(e) => setFilter(e.target.value || null)}
          >
            <S.TaskHeaderFilterOptions
              value={''}
              selected
            >
              All
            </S.TaskHeaderFilterOptions>
            <S.TaskHeaderFilterOptions value={EStatuses.Complete}>
              {EStatuses.Complete}
            </S.TaskHeaderFilterOptions>
            <S.TaskHeaderFilterOptions value={EStatuses.InProgress}>
              {EStatuses.InProgress}
            </S.TaskHeaderFilterOptions>
            <S.TaskHeaderFilterOptions value={EStatuses.Deadline}>
              {EStatuses.Deadline}
            </S.TaskHeaderFilterOptions>
          </S.TaskHeaderFilter>
        </S.TaskHeaderFilterContainer>
        <S.TaskAddNewButton onClick={handleAddClick}>Add</S.TaskAddNewButton>
      </S.TaskHeaderContainer>
    </>
  );
}
