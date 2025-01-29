import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Author } from '../entities/author.entity';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateAuthorInput
  extends PartialType(CreateAuthorInput)
  implements Partial<Author>
{
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  firstname: string;

  @Field({ nullable: true })
  @IsOptional()
  lastname: string;
}
