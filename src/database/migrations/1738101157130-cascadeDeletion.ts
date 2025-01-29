import { MigrationInterface, QueryRunner } from 'typeorm';

export class CascadeDeletion1738101157130 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "author_books"
          DROP CONSTRAINT "FK_d68c3bd017096097568e0465f9e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "author_books"
          DROP CONSTRAINT "FK_680fd0d757d5faa49a63a27deb6"`,
    );

    await queryRunner.query(
      `ALTER TABLE "author_books"
          ADD CONSTRAINT "FK_d68c3bd017096097568e0465f9e" FOREIGN KEY ("author_id") REFERENCES "authors" ("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "author_books"
          ADD CONSTRAINT "FK_680fd0d757d5faa49a63a27deb6" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "author_books"
          DROP CONSTRAINT "FK_680fd0d757d5faa49a63a27deb6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "author_books"
          DROP CONSTRAINT "FK_d68c3bd017096097568e0465f9e"`,
    );

    await queryRunner.query(
      `ALTER TABLE "author_books"
          ADD CONSTRAINT "FK_d68c3bd017096097568e0465f9e" FOREIGN KEY ("author_id") REFERENCES "authors" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "author_books"
          ADD CONSTRAINT "FK_680fd0d757d5faa49a63a27deb6" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
