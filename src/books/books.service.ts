import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  create(createBookInput: CreateBookInput) {
    const { authorIds, title, description } = createBookInput;
    const book = this.bookRepository.create({
      title,
      description,
      authors: authorIds.map((id) => ({ id })),
    });

    return this.bookRepository.save(book);
  }

  findAll() {
    return this.bookRepository.find({ relations: ['authors'] });
  }

  findOne(id: number) {
    return this.bookRepository.findOne({
      where: { id },
      relations: ['authors'],
    });
  }

  async update(id: number, updateBookInput: UpdateBookInput) {
    await this.bookRepository.update(id, updateBookInput);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.bookRepository.findOneOrFail({ where: { id } });
    return this.bookRepository.delete({ id });
  }
}
