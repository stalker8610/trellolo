import { TaskListService } from './../services/task-list.service';
import { Observable, map, filter } from 'rxjs';
import { TaskService } from './../services/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task/task.model';
import { TaskList } from './task-list.model';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ConfirmDialog } from '../commons/confirmDialog/confirmDialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
    @Input() taskList!: TaskList;
    tasks$: Observable<Task[]>;

    constructor(
        private taskListService: TaskListService,
        private taskService: TaskService,
        private confirmDialog: MatDialog,
        private snackBar: MatSnackBar) {
        this.tasks$ = taskService.entities$
            .pipe(
                map((tasks: Task[]) => tasks.filter(task => task.taskListId === this.taskList.id))
            );
    }

    deleteList() {
        const dialogRef = this.confirmDialog.open(ConfirmDialog,
            {
                data:
                {
                    title: 'Подтвердите удаление',
                    content: `Cписок "${this.taskList.title}" и все входящие в него задачи будут удалены. Продолжить?`
                },
                panelClass: 'confirmDialog'
            });

        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.taskListService.delete(this.taskList.id).subscribe(() => {
                    this.snackBar.open('Готово!', '', { duration: 1500 });
                });
        })

    }

    addTask() {
        /* const newTask = this.dataService.createNewTask(this.taskList, { id: 3, title: 'New task', description: '' } as Task);
        this.taskService.openTaskView(newTask); */
    }

    openCard(task: Task) {
        /* this.taskService.openTaskView(task); */
    }

    drop(event: CdkDragDrop<Task[]>) {
        /* if (event.previousContainer === event.container) {
            moveItemInArray(this.taskList.tasks, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        } */
    }
}
