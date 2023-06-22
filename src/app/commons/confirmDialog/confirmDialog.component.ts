import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Input, Inject } from "@angular/core";

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirmDialog.component.html',
    styleUrls: ['./confirmDialog.component.scss']
})
export class ConfirmDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, content: string }) {
    }
}