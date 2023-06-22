import { Task } from './../task/task.model';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskService extends EntityCollectionServiceBase<Task> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Task', serviceElementFactory);
    }
}