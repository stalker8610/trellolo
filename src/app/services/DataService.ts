import { Injectable } from "@angular/core";
import { Task, TaskList } from "../commonTypes";

@Injectable()
export class DataService {

    private board: TaskList[] = [];

    loadBoard() {
        this.board = [
            {
                id: 1,
                title: 'New tasks',
                tasks: []
            },
            {
                id: 2,
                title: 'In process',
                tasks: []
            },
        ];

        return this.board;
    }

    loadList(list: TaskList) {
        return this.board.find(taskList => taskList === list);
    }

    addList(listName: string) {

        const newList = {
            id: 3,
            title: listName,
            tasks: [],
        }
        this.board.push(newList);
    }

    addTask(list: TaskList, task: Task) {
        this.board.find(taskList => taskList === list)?.tasks.push(task);
    }

}