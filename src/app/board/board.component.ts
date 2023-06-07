import { Component, OnInit } from '@angular/core';
import { TaskList } from '../commonTypes';
import { DataService } from '../services/DataService';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
    providers: [DataService]
})
export class BoardComponent implements OnInit {

    board: TaskList[] | null = null;
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.board = this.dataService.loadBoard();
    }

    addList() {
        this.dataService.addList('New list');
    }

    trackTaskListBy(index: number, item: TaskList) {
        return item.id;
    }

}
