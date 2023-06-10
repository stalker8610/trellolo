import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskComponent } from '../task/task.component';
import { Task } from "../commonTypes";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private matDialog: MatDialog){ }

    openTaskView(task: Task){
        this.matDialog.open(TaskComponent, {
            data: task,
            width: '435px',
            maxHeight: '80%',
            hasBackdrop: true,
            disableClose: true,
            panelClass: 'task-panel'
        });
    }
}