import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm"
import { Uf } from "./Uf";
import { Bairro } from "./Bairro";

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

    @ManyToOne(() => Uf)
    uf : Uf;

    @OneToMany(() => Bairro, (bairro) => bairro.municipio, { onDelete: "CASCADE" })
    bairros: Bairro[];



}