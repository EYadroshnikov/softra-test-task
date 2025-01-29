import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../../authors/entities/author.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity('books')
@ObjectType()
export class Book {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Field(() => String)
  @Column({ name: 'description', type: 'text' })
  description: string;

  @Field(() => [Author], { description: 'List of authors for the book' })
  @ManyToMany(() => Author, (author) => author.books)
  authors: Author[];
}
