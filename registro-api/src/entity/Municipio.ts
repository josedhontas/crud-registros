import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm"
import { Uf } from "./Uf";

@Entity()
export class Municipio{
    constructor(nome: string, status: boolean ){
        this.nome = nome;
        this.status = status;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    status: boolean;

    @ManyToMany(() => Uf)
    uf : Uf;

}