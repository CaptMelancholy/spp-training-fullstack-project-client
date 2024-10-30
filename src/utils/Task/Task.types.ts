export interface ITask {
    id: number;
    title: string;
    deadline: string;
    status: EStatuses;
    files?: Array<IFile>;
}

export enum EStatuses {
    InProgress = "In Progress",
    Deadline = "Deadline",
    Complete = "Complete"
}

export interface IFile {
    id: number;
    filename: string;
    url: string;
}

