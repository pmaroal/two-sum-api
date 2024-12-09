import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { TwoSumLogService } from './twoSumLog.service';
import { twoSum } from './twoSum.util'; // Importamos la función

@Controller()
export class AppController {
  constructor(private readonly twoSumLogService: TwoSumLogService) {}

  @Get('health')
  getHealth(): string {
    return 'ok';
  }

  @Get('twoSum')
  async getTwoSum(
    @Query('array') array: string,
    @Query('target') target: string,
  ) {
    const numbersArray = JSON.parse(array);
    const targetNumber = parseInt(target);

    // Llamamos a la nueva función twoSum para obtener los números
    const result = twoSum(numbersArray, targetNumber);

    if (result) {
      // Si encontramos un par, lo registramos
      await this.twoSumLogService.createLog(
        numbersArray,
        targetNumber,
        result.numberOne,
        result.numberTwo,
      );
      return result; // Retornamos el par encontrado
    }

    // Si no encontramos el par, lanzamos una excepción
    throw new HttpException('Two numbers not found', HttpStatus.NOT_FOUND);
  }

  @Get('history')
  async getHistory() {
    return await this.twoSumLogService.getAllLogs();
  }
}
