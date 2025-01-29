import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBooks1738086997673 implements MigrationInterface {
  name = 'AddBooks1738086997673';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "books"
       (
           "id"          SERIAL            NOT NULL,
           "title"       character varying NOT NULL,
           "description" text              NOT NULL,
           CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id")
       )`,
    );
    await queryRunner.query(
      `CREATE TABLE "author_books"
       (
           "author_id" integer NOT NULL,
           "book_id"   integer NOT NULL,
           CONSTRAINT "PK_d8330e39e9fcf9314d13a3f6325" PRIMARY KEY ("author_id", "book_id")
       )`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d68c3bd017096097568e0465f9" ON "author_books" ("author_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_680fd0d757d5faa49a63a27deb" ON "author_books" ("book_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "author_books"
          ADD CONSTRAINT "FK_d68c3bd017096097568e0465f9e" FOREIGN KEY ("author_id") REFERENCES "authors" ("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "author_books"
          ADD CONSTRAINT "FK_680fd0d757d5faa49a63a27deb6" FOREIGN KEY ("book_id") REFERENCES "books" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `DROP INDEX "public"."IDX_680fd0d757d5faa49a63a27deb"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d68c3bd017096097568e0465f9"`,
    );
    await queryRunner.query(`DROP TABLE "author_books"`);
    await queryRunner.query(`DROP TABLE "books"`);
  }
}
