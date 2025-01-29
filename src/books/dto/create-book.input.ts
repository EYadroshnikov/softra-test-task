import { InputType, Int, Field } from '@nestjs/graphql';
import { Book } from '../entities/book.entity';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateBookInput implements Partial<Book> {
  @Field(() => [Int])
  @IsNotEmpty()
  @IsInt({ each: true })
  authorIds: number[];

  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  description: string;
}
