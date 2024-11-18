import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class TwoSumLog {
  @PrimaryGeneratedColumn()
  id: number; // ID único para cada registro

  @Column('json')
  array: number[]; // Almacena el array pasado al endpoint

  @Column('int')
  numberOne: number; // Primer número encontrado

  @Column('int')
  numberTwo: number; // Segundo número encontrado

  @CreateDateColumn()
  createdAt: Date; // Fecha de creación del registro
}
