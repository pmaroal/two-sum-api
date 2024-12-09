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

  // Method to create a log
  async createLog(
    array: number[],
    target: number,
    numberOne: number,
    numberTwo: number,
  ): Promise<void> {
    const log = new TwoSumLog();
    log.array = array;
    log.target = target;
    log.numberOne = numberOne;
    log.numberTwo = numberTwo;

    await this.twoSumLogRepository.save(log);
  }

  // Method to get all logs
  async getAllLogs(): Promise<TwoSumLog[]> {
    return this.twoSumLogRepository.find();
  }
}
