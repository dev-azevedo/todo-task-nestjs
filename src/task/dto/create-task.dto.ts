import { IsString, Length } from "class-validator";

export class CreateTaskDto {
    @IsString({ message: 'Task title is a string' })
    @Length(3, 25, { message: 'Task title must be between 3 and 25 characters' })
    title: string;

    @IsString({ message: 'Task description is a string' })
    @Length(3, 150, { message: 'Task description must be between 3 and 150 characters' })
    description: string;
}
