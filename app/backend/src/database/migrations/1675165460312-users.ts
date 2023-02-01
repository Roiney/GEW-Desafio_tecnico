import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1675165460312 implements MigrationInterface {
    private table = new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'data_nascimento',
            type: 'varchar',
            length: '255',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'CEP',
            type: 'varchar',
            length: '255',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'endereco',
            type: 'varchar',
            length: '255',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'cidade',
            type: 'varchar',
            length: '255',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'estado',
            type: 'varchar',
            length: '255',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'senha',
            type: 'varchar',
            length: '255',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          }
        ],
      });
    
      public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
      }
      public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
      }
    }
