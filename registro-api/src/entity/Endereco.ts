import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm"
import { Bairro } from "./Bairro";
import { Pessoa } from "./Pessoa";

@Entity()
export class Endereco{
    constructor(logradouro: string, numero: number, bairro: Bairro){
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    logradouro: string;

    @Column()
    numero: number;

    @ManyToOne(()=> Bairro)
    bairro: Bairro

    @OneToMany(()=> Pessoa, (pessoa)=> pessoa.endereco, {onDelete: "CASCADE"})
    pessoas: Pessoa[];

}
