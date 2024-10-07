/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}

    @Get()
     public getAllTodos(){
        return this.todoService.getAllTodos();
    }

    @Post()
    public  postTodo(@Body() todo: TodoDto ){
        return this.todoService.postTodo(todo)
    }

    @Get(':id')
    public async getTodoById(@Param('id') id:number){
       return this.todoService.getTodoById(id);
    }

    @Delete(':id')
    public async deleteTodoById(@Param('id') id:number){
        this.todoService.deleteTodoById(id);
    }

    @Put(':id')
    public async putTodoById(@Param('id') id:number, @Query() query ){
        const description = query.description;
        const completed = query.completed;

        this.todoService.putTodoById(id, description, completed);
    }

}
