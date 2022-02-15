import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDevLevel1644684455762 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dev_level',
        columns:[
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
        ],
      })
    )
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('dev_level');
    }

}
