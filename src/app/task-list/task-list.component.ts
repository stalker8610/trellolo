import { Component, Input } from '@angular/core';
import { Task, TaskList } from "../commonTypes";
import { DataService } from '../services/DataService';
import { TaskService } from '../services/TaskService';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
    @Input() taskList!: TaskList;

    constructor(private dataService: DataService, private taskService: TaskService) {
    }

    addTask() {
        const newTask = this.dataService.createNewTask(this.taskList, { id: 3, title: 'New task', description: '' } as Task);
        this.taskService.openTaskView(newTask);
    }

    openCard(task: Task) {
        this.taskService.openTaskView(task);
    }

    drop(event: CdkDragDrop<Task[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(this.taskList.tasks, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }
}
