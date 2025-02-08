import { Type } from "class-transformer";
import { IsInt, IsOptional, Min } from "class-validator";

export class PaginateDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1, { message: 'Page must be greater than 0' })
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1, { message: 'Limit must be greater than 0' })
  limit?: number;
}