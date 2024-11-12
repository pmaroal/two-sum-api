import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';

@Controller()
export class AppController {
  // Endpoint /health always responding OK with status 200
  @Get('health')
  getHealth(): string {
    return 'ok';
  }

  // Endpoint /twoSum que recibe un array y un target como parámetros

  @Get('twoSum')
  getTwoSum(@Query('array') array: string, @Query('target') target: string) {
    // Endpoint /twoSum receiving an array and a target as parameters

    const numbersArray = JSON.parse(array);
    const targetNumber = parseInt(target);

    //Logic for finding two numbers that add up to the target value
    for (let i = 0; i < numbersArray.length; i++) {
      for (let j = i + 1; j < numbersArray.length; j++) {
        if (numbersArray[i] + numbersArray[j] === targetNumber) {
          return { numberOne: numbersArray[i], numberTwo: numbersArray[j] };
        }
      }
    }
    //If no numbers are found, return 404
    throw new HttpException('Two numbers not found', HttpStatus.NOT_FOUND);
  }
}
