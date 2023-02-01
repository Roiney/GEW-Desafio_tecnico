import { Entity, Column, CreateDateColumn, PrimaryColumn  } from "typeorm";
import { v4  as uuid } from "uuid";

@Entity('users')
export class User {

    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    data_nascimento: string;

    @Column()
    CEP: string;

    @Column()
    endereco: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    senha: string;

    @CreateDateColumn()
    created_at: string;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}