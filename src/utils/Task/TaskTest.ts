import { EStatuses, ITask } from './Task.types';

export const tasks : Array<ITask> = [
    {
        id: 0,
        title: '123',
        status: EStatuses.Complete,
        deadline: '25 04 2024',
    },
    {
        id: 1,
        title: '13251253',
        status: EStatuses.Deadline,
        deadline: '25 04 2024',
    },
    {
        id: 2,
        title: '123',
        status: EStatuses.InProgress,
        deadline: '25 04 2024',
    },
    {
        id: 3,
        title: '123',
        status: EStatuses.Complete,
        deadline: '25 04 2024',
    },
    {
        id: 4,
        title: '123',
        status: EStatuses.Complete,
        deadline: '25 04 2024',
    },
    {
        id: 5,
        title: '123',
        status: EStatuses.Complete,
        deadline: '25 04 2024',
    },
]