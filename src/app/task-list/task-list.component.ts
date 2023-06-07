import { Component, Input } from '@angular/core';
import { Task, TaskList } from "../commonTypes";
import { DataService } from '../services/DataService';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
    @Input() taskList!: TaskList;

    constructor(private dataService: DataService) {

    }

    addTask() {
        this.dataService.addTask(this.taskList, { id: 3, title: 'New task' } as Task);
    }
}
