import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1738071853587 implements MigrationInterface {
  name = 'Init1738071853587';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "authors"
                             (
                                 "id"        SERIAL            NOT NULL,
                                 "firstname" character varying NOT NULL,
                                 "lastname"  character varying NOT NULL,
                                 CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "authors"`);
  }
}
