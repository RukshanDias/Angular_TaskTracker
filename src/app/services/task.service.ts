import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
