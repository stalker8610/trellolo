import { Injectable } from "@angular/core";
import { Task, TaskList, User } from "../commonTypes";

@Injectable()
export class DataService {

    private board: TaskList[] = [];

    user: User = {
        id: 1,
        name: 'Anton',
        role: 'developer'
    }

    loadBoard() {
        this.board = [
            {
                id: 1,
                title: 'В работу',
                tasks: [
                    {
                        id: 0,
                        title: 'Разработка формы',
                        description: 'Разработать форму авторизации на Angular',
                        author: this.user,
                        
                    },
                    {
                        id: 1,
                        title: 'Доработать стиль кнопки',
                        author: this.user,
                        description: 'Используя стандартную палитру MUI доработать фон и цвет текста',
                    },
                ]
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

    createNewTask(list: TaskList, task: Task) {
        this.board.find(taskList => taskList === list)?.tasks.push(task);
        return task;
    }

    acceptTask() { }

    takeTask() { }

    *taskIdGenerator() {
        let nextId = 0;
        yield nextId++;
    }

}