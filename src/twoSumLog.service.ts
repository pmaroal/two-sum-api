import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TwoSumLog } from './entities/twoSumLog.entity';

@Injectable()
export class TwoSumLogService {
  constructor(
    @InjectRepository(TwoSumLog)
    private readonly twoSumLogRepository: Repository<TwoSumLog>,
  ) {}

  // Método para crear un log
  async createLog(
    array: number[],
    numberOne: number,
    numberTwo: number,
  ): Promise<void> {
    const log = new TwoSumLog();
    log.array = array;
    log.numberOne = numberOne;
    log.numberTwo = numberTwo;

    await this.twoSumLogRepository.save(log);
  }

  // Método para obtener todos los logs
  async getAllLogs(): Promise<TwoSumLog[]> {
    return this.twoSumLogRepository.find();
  }
}
