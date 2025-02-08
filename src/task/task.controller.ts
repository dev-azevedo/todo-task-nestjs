import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, HttpStatus } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginateDto } from './dto/paginate.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto);
  }

  @Get()
  async findAll(@Query() paginate: PaginateDto) {
    return await this.taskService.findAll(paginate);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = await this.taskService.findOne(+id);

    if (!task)
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

    return task;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const task = await this.taskService.findOne(+id);

    if (!task)
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

    return await this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const task = await this.taskService.findOne(+id);

    if (!task)
      throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
    
    return await this.taskService.remove(+id);
  }
}
