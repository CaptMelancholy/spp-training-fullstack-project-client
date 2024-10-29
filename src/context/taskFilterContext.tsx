import { createContext, ReactNode, useState } from 'react';

interface IProps {
  children: ReactNode;
}

export interface TaskFilterContextType {
  search: string;
  filter: string | null;
  setSearch: (term: string) => void;
  setFilter: (status: string | null) => void;
}

export const TaskFilterContext = createContext<TaskFilterContextType | undefined>(
  undefined,
);

export function TaskFilterProvider({ children }: IProps) {
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string | null>(null);

  return (
    <TaskFilterContext.Provider
      value={{ search, filter, setSearch, setFilter }}
    >
      {children}
    </TaskFilterContext.Provider>
  );
}


