import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';

@Controller()
export class AppController {
  // Endpoint /health que siempre responde OK con status 200

  @Get('health')
  getHealth(): string {
    return 'ok';
  }

  // Endpoint /twoSum que recibe un array y un target como parámetros

  @Get('twoSum')
  getTwoSum(@Query('array') array: string, @Query('target') target: string) {
    //Parsear el array y el target de string a los tipos necesarios

    const numbersArray = JSON.parse(array);
    const targetNumber = parseInt(target);

    //Lógica para encontrar dos numeros aue sumen el valor objetivo
    for (let i = 0; i < numbersArray.length; i++) {
      for (let j = i + 1; j < numbersArray.length; j++) {
        if (numbersArray[i] + numbersArray[j] === targetNumber) {
          return { numberOne: numbersArray[i], numberTwo: numbersArray[j] };
        }
      }
    }
    //Si no se encuentran numeros, devolver un 404
    throw new HttpException('No two numbers found', HttpStatus.NOT_FOUND);
  }
}
