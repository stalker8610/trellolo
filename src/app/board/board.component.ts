import { Component, OnInit } from '@angular/core';
import { TaskList } from '../commonTypes';
import { DataService } from '../services/DataService';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

    board: TaskList[] | null = null;
    id: number = 33821;
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
