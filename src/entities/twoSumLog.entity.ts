import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('twoSumLogs') // Name of the table in the database
export class TwoSumLog {
  @PrimaryGeneratedColumn() // ID to be auto-incremented
  id: number;

  @Column('json') // We use the JSON type for the array
  array: number[];

  @Column()
  numberOne: number;

  @Column()
  numberTwo: number;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
