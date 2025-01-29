import { Field, InputType } from '@nestjs/graphql';
import { Author } from '../entities/author.entity';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAuthorInput implements Partial<Author> {
  @Field()
  @IsNotEmpty()
  firstname: string;

  @Field()
  @IsNotEmpty()
  lastname: string;
}
