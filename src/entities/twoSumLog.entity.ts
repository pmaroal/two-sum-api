import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('twoSumLogs') // Nombre de la tabla en la base de datos
export class TwoSumLog {
  @PrimaryGeneratedColumn() // ID que será autoincrementado
  id: number;

  @Column('json') // Usamos el tipo JSON para el array
  array: number[];

  @Column()
  numberOne: number;

  @Column()
  numberTwo: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
