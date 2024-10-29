import { useContext } from 'react';
import { TaskFilterContext, TaskFilterContextType } from './taskFilterContext';

export const useTaskFilter = (): TaskFilterContextType => {
  const context = useContext(TaskFilterContext);
  if (!context) {
    throw new Error('useTaskFilter must be used within a TaskFilterProvider');
  }
  return context;
};
