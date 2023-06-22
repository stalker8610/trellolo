export interface Task {
    id: number,
    title: string,
    description: string,
    authorId: number,
    implementorId?: number,
    creationDate: Date,
    expirationDate?: Date,
    workspaceId: number,
    taskListId: number,
}

export interface TaskAttachment {
    id: number,
    attachedByUserId: number,
    taskId: number,
    fileName: string,
    url: string,
}
