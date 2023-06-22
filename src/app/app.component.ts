import {  Observable, of } from 'rxjs';
import { Workspace } from './workspace/workspace.model';
import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from './services/workspace.service';
import { TaskListService } from './services/task-list.service';
import { TaskService } from './services/task.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title: string = '';
    workspaceLoading$: Observable<boolean>;
    workspaces$: Observable<Workspace[]>;
    currentWorkspace: Workspace | null = null;

    constructor(private workspaceService: WorkspaceService, private taskListService: TaskListService, private taskService: TaskService) {
        this.workspaceLoading$ = workspaceService.loading$;
        this.workspaces$ = workspaceService.entities$;

        this.workspaces$.subscribe((value: Workspace[]) => {
            if (value?.length) {
                this.currentWorkspace = value[0];
                this.taskListService.getWithQuery({ workspaceId: this.currentWorkspace.id });
                this.taskService.getWithQuery({ workspaceId: this.currentWorkspace.id });
                this.title = this.currentWorkspace.title;
            } else {
                this.taskListService.clearCache();
                this.taskService.clearCache();
            }
        })
    }

    ngOnInit() {
        this.workspaceService.getWithQuery({ id: 1 });
    }
}
