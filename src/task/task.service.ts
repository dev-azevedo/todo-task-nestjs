import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { ETaskStatus } from './task-status.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateDto } from './dto/paginate.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    task.status = ETaskStatus.ABERTO;
    return await this.taskRepository.save(task);
  }

  async findAll(paginate: PaginateDto) {
     const page = paginate.page ?? 1;
     const limit = paginate.limit ?? 10;

     const tasks = await this.taskRepository.find({
       skip: (page - 1) * limit,
       take: limit,
     });
    return tasks;
  }

  async findOne(id: number) {
    return await this.taskRepository.findOneBy({id});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return await this.taskRepository.delete(id);
  }
}
