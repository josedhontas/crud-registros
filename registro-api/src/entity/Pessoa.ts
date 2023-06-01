import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Endereco } from "./Endereco"

@Entity()
export class Pessoa{
    constructor(nome: string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @ManyToOne(() => Endereco)
    endereco: Endereco
}