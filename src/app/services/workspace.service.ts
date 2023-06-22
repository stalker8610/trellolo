import { Workspace } from './../workspace/workspace.model';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WorkspaceService extends EntityCollectionServiceBase<Workspace> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Workspace', serviceElementFactory);
    }
}