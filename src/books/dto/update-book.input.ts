import { Field, InputType, Int } from '@nestjs/graphql';
import { Book } from '../entities/book.entity';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateBookInput implements Partial<Book> {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  description: string;

  @Field(() => [Int], { nullable: true })
  @IsOptional()
  @IsInt({ each: true })
  authorIds: number[];
}
