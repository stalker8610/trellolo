import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {


    cleanBoard() {
        alert('clean board works!')
    }

    leaveReview() {
        alert('leave review works!')
    }
}
