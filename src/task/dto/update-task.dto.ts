import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsNumber } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsNumber({}, { message: 'Task status is a number between 1 and 3' })
    status?: number;
}
