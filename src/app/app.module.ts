import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskPreviewComponent } from './task-preview/task-preview.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ConfirmDialog } from './commons/confirmDialog/confirmDialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WorkspaceTutorialComponent } from './workspace-tutorial/workspace-tutorial.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { defaultDataServiceConfig } from './services/services.config';
/* import { TaskComponent } from './task/task.component'; */
import { EditableComponent, EditableDirective, InputForEditableDirective, ContainerForEditableDirective } from './editable/editable.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { DefaultDataServiceConfig } from "@ngrx/data";
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        AppComponent,
        TaskPreviewComponent,
        WorkspaceComponent,
        TaskListComponent,
        WorkspaceTutorialComponent,
        ToolbarComponent,
        ConfirmDialog,
        /* TaskComponent, */
        EditableDirective,
        InputForEditableDirective,
        ContainerForEditableDirective,
        EditableComponent,

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        DragDropModule,
        MatSnackBarModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })

    ],
    providers: [
        {
            provide: DefaultDataServiceConfig,
            useValue: defaultDataServiceConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
