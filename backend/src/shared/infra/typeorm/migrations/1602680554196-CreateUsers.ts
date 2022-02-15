import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1602680554196 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'users',
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
                type: 'varchar'
              },
              {
                name: 'cpf',
                type: 'varchar',
                isUnique: true
              },
              {
                name: 'type',
                type: 'enum',
                enum: ['REVENDEDOR(A)', 'GERENTE'],
                enumName: 'typeEnum'
              },
              {
                name: 'email',
                type: 'varchar',
                isUnique: true
              },
              {
                name: 'password',
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
            ]
          })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
