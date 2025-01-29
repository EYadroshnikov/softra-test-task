import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from '../../books/entities/book.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity('authors')
@ObjectType()
export class Author {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ name: 'firstname', type: 'varchar' })
  firstname: string;

  @Field(() => String)
  @Column({ name: 'lastname', type: 'varchar' })
  lastname: string;

  @Field(() => [Book], {
    nullable: true,
    description: 'Books written by the author',
  })
  @ManyToMany(() => Book, (book) => book.authors, { onDelete: 'CASCADE' })
  @JoinTable({
    name: 'author_books', // Название промежуточной таблицы
    joinColumn: { name: 'author_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'book_id', referencedColumnName: 'id' },
  })
  books: Book[];
}
