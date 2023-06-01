import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity()
export class Uf{
    constructor(sigla: string, nome: string, status: boolean ){
        this.sigla = sigla;
        this.nome = nome;
        this.status = status;
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    sigla: string

    @Column()
    nome: string

    @Column()
    status: boolean

}