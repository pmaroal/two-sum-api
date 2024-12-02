import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { TwoSumLogService } from './twoSumLog.service';
import { twoSum } from './twoSum.util';

@Controller()
export class AppController {
  constructor(private readonly twoSumLogService: TwoSumLogService) {}
  // Endpoint /health always responding OK with status 200
  @Get('health')
  getHealth(): string {
    return 'ok';
  }
  // Endpoint /twoSum which receives an array and a target as parameters

  @Get('twoSum')
  async getTwoSum(
    @Query('array') array: string,
    @Query('target') target: string,
  ) {
    // Endpoint /twoSum receiving an array and a target as parameters

    const numbersArray = JSON.parse(array);
    const targetNumber = parseInt(target);

    const result = twoSum(numbersArray, targetNumber);

    //Logic for finding two numbers that add up to the target value
    if (result) {
      const [numberOne, numberTwo] = result;

      // Registra el log
      await this.twoSumLogService.createLog(numbersArray, numberOne, numberTwo);

      return { numberOne, numberTwo };
    }
    //If no numbers are found, return 404
    throw new HttpException('Two numbers not found', HttpStatus.NOT_FOUND);
  }
  // Endpoint /history to obtain all logs
  @Get('history')
  async getHistory() {
    return await this.twoSumLogService.getAllLogs();
  }
}
