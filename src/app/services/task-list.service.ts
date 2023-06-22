import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';
import { TaskList } from '../task-list/task-list.model';

@Injectable({
    providedIn: 'root'
})
export class TaskListService extends EntityCollectionServiceBase<TaskList> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('TaskList', serviceElementFactory);
    }
}