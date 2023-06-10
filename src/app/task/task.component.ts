import { DataService } from './../services/DataService';
import { Component, Input, Inject, ViewEncapsulation, HostBinding } from '@angular/core';
import { Task } from '../commonTypes';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

declare interface Attachment {
    url: string,
    fileName: string
}

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TaskComponent {

    public editMode = false;

    public attachments: Array<Attachment> = [];

    constructor(private dataService: DataService, @Inject(MAT_DIALOG_DATA) public task: Task) {
        this.editMode = !task;
    }

    saveTask() {

    }

    @HostBinding('keydown.esc') onEsc() {
        return false;
    }

}
