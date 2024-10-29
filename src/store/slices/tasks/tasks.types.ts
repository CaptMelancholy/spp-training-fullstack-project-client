import { ITask } from '../../../utils/Task/Task.types';

export interface IStorageTasks {
    tasks: Array<ITask>;
}

export const storageTasksDefaultState : IStorageTasks = {
    tasks : [],
}