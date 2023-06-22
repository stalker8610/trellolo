import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

    @Input() workspaceName: string = '';
    constructor(private httpClient: HttpClient) { }

    cleanWorkspace() {
        alert('clean board works!')
    }

    leaveReview() {
        alert('leave review works!')
    }

    restoreMockItems() {
        console.log('hi');
        this.httpClient.get('http://localhost:8081/api/v1/workspaces/restore').subscribe(value=>console.log(value));
        this.httpClient.get('http://localhost:8081/api/v1/users/restore').subscribe(value=>console.log(value));
        this.httpClient.get('http://localhost:8081/api/v1/tasks/restore').subscribe(value=>console.log(value));
        this.httpClient.get('http://localhost:8081/api/v1/tasklists/restore').subscribe(value=>console.log(value));
    }
}
