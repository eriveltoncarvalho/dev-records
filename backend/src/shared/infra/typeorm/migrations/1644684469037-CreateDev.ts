import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDev1644684469037 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dev',
        columns:[
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'dev_level_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'sexo',
            type: 'enum',
            enum: ['MASCULINO', 'FEMININO']
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'birth_date',
            type: 'timestamp'
          },
          {
            name: 'age',
            type: 'int',
          },
          {
            name: 'hobby',
            type: 'varchar'
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
        foreignKeys: [
          {
            name: 'Dev_DevLevel',
            referencedTableName: 'dev_level',
            referencedColumnNames: ['id'],
            columnNames: ['dev_level_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    )
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dev');
  }
}
