import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Municipio } from "./Municipio";

@Entity()
export class Uf {
  constructor(sigla: string, nome: string, status: boolean) {
    this.sigla = sigla;
    this.nome = nome;
    this.status = status;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sigla: string;

  @Column()
  nome: string;

  @Column()
  status: boolean;

  @OneToMany(() => Municipio, (municipio) => municipio.uf, { onDelete: "CASCADE" })
  municipios: Municipio[];
}
