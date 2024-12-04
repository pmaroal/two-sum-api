import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TwoSumLog } from './entities/twoSumLog.entity';

@Injectable()
export class TwoSumLogService {
  constructor(
    @InjectRepository(TwoSumLog)
    private twoSumLogRepository: Repository<TwoSumLog>,
  ) {}

  // Método para crear un log
  async createLog(
    array: number[],
    numberOne: number,
    numberTwo: number,
  ): Promise<TwoSumLog> {
    // Aquí se crea el objeto TwoSumLog, pero aún no se guarda en la base de datos
    const log = this.twoSumLogRepository.create({
      array,
      numberOne,
      numberTwo,
    });

    // Ahora se guarda en la base de datos
    return await this.twoSumLogRepository.save(log);
  }

  // Método para obtener todos los logs
  async getAllLogs(): Promise<TwoSumLog[]> {
    return this.twoSumLogRepository.find();
  }
}
