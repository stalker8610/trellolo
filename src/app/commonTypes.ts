export type UserRole = 'developer' | 'teamlead';

export interface User {
    id: number,
    name: string,
    role: UserRole,
}

export interface Task { 
    id: number,
    title: string,
    description: string,
    author: User,
    implementor?: User,
}

export interface TaskList {
    id: number,
    title: string,
    tasks: Task[],
}