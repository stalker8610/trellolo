import { Observable } from 'rxjs';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { WorkspaceService } from '../services/workspace.service';
import { TaskListService } from '../services/task-list.service';
import { Workspace } from './workspace.model';
import { TaskList } from '../task-list/task-list.model';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent {
    @Input() workspace!: Workspace;
    tasklists$: Observable<TaskList[]>;

    constructor(private taskListService: TaskListService) {
        this.tasklists$ = this.taskListService.entities$;
    }

    addList() {
        this.taskListService.add({ id: 0, title: 'New list', workspaceId: this.workspace.id });
    }

    trackTaskListBy(index: number, item: TaskList) {
        return item.id;
    }

}
