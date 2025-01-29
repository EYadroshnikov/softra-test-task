import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  create(createAuthorInput: CreateAuthorInput) {
    const author = this.authorRepository.create(createAuthorInput);
    return this.authorRepository.save(author);
  }

  findAll() {
    return this.authorRepository.find({ relations: ['books'] });
  }

  findOne(id: number) {
    return this.authorRepository.findOne({
      where: { id },
      relations: ['books'],
    });
  }

  async update(id: number, updateAuthorInput: UpdateAuthorInput) {
    await this.authorRepository.update(id, updateAuthorInput);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.authorRepository.findOneOrFail({ where: { id } });
    return this.authorRepository.delete({ id });
  }
}
