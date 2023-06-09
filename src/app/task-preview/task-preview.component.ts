import { Component, Input } from '@angular/core';
import { Task } from '../task/task.model';


@Component({
    selector: 'app-task-preview',
    templateUrl: './task-preview.component.html',
    styleUrls: ['./task-preview.component.scss']
})
export class TaskPreviewComponent {
    @Input() task!: Task;
}
