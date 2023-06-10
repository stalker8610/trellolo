import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskPreviewComponent } from './task-preview/task-preview.component';
import { BoardComponent } from './board/board.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BoardTutorialComponent } from './board-tutorial/board-tutorial.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataService } from './services/DataService';
import { TaskComponent } from './task/task.component';
import { EditableComponent, EditableDirective, InputForEditableDirective, ContainerForEditableDirective } from './editable/editable.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
    declarations: [
        AppComponent,
        TaskPreviewComponent,
        BoardComponent,
        TaskListComponent,
        BoardTutorialComponent,
        ToolbarComponent,
        TaskComponent,
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
        DragDropModule

    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
