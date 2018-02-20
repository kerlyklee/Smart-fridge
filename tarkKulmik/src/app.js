<<<<<<< HEAD
import {Todo} from './todo';

    export class App {
      constructor() {
        this.heading = "Todos";
        this.todos = [];
        this.todoDescription = '';
      }

      addTodo() {
        if (this.todoDescription) {
          this.todos.push(new Todo(this.todoDescription));
          this.todoDescription = '';
        }
      }

      removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
          this.todos.splice(index, 1);
        }
      }
    }
=======
export class App {
  constructor() {
    this.message = 'Mul on niii igavv!';
  }
}
>>>>>>> 8ff252f819e36a464a6d151b078afb7167d51087
