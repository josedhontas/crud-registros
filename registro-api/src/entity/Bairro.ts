import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne } from "typeorm"
import { Municipio } from "./Municipio";
import { Endereco } from "./Endereco";

@Entity()
export class Bairro{
    constructor(nome: string, status: boolean, municipio: Municipio){
        this.nome = nome;
        this.status = status;
        this.municipio = municipio;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    status: boolean;

    @ManyToOne(()=> Municipio)
    municipio: Municipio

    @OneToMany(() => Endereco, (endereco) => endereco.bairro, { onDelete: "CASCADE" })
    enderecos: Endereco[];
}