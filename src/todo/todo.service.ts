/* eslint-disable prettier/prettier */
import { Injectable, HttpException } from '@nestjs/common';
import { TODOS } from './todo.mock';

@Injectable()
export class TodoService {
    
    private todos = TODOS;
    
    public getAllTodos(){
        return this.todos;
    }

    public postTodo(todo){
        return this.todos.push(todo);
    }

    public getTodoById(id: number):Promise<any>{

        const todoId = Number(id);

        return new Promise ((resolve)=>{
            const todo = this.todos.find((element) => element.id == todoId);

         if(!todo){
            throw new HttpException("Not Found", 404);
         }

         return resolve (todo);
        })

         
    }

    public putTodoById(id: number, description: string, completed: boolean):Promise<any>{

        const todoId = Number(id);

        return new Promise ((resolve)=>{
            const todoIndex = this.todos.findIndex((element) => element.id === todoId);

         if(todoIndex === -1){
            throw new HttpException("Not Found", 404);
         }

         this.todos[todoIndex].description = description;
         this.todos[todoIndex].completed = completed;

        return resolve (this.todos);
        })
    }

    public deleteTodoById(id: number): Promise<any> {
        const todoId = Number(id);
    
        return new Promise((resolve, reject) => {
            const todoIndex = this.todos.findIndex((element) => element.id === todoId);
    
            if (todoIndex === -1) {
                return reject(new HttpException("Not Found", 404)); 
            }
    
            this.todos.splice(todoIndex, 1); 
    
            resolve(this.todos); 
        });
    }
    



}
