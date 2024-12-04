import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { TwoSumLogService } from './twoSumLog.service';

describe('AppController', () => {
  let appController: AppController;
  let twoSumLogServiceMock: Partial<TwoSumLogService>;

  beforeEach(async () => {
    // Creamos un mock del servicio TwoSumLogService
    twoSumLogServiceMock = {
      createLog: jest.fn(), // Mock para el método createLog
      getAllLogs: jest.fn(), // Mock para el método getAllLogs
    };

    // Creamos un módulo de prueba con el controlador y el servicio mockeado
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: TwoSumLogService,
          useValue: twoSumLogServiceMock, // Usamos el mock como servicio real
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController); // Obtenemos el controlador
  });

  // Prueba para la ruta "/health"
  describe('root', () => {
    it('should return "ok"', () => {
      expect(appController.getHealth()).toBe('ok');
    });
  });

  // Prueba para la ruta "/twoSum"
  describe('twoSum', () => {
    it('should return a pair of numbers', async () => {
      const array = '[1, 2, 3, 4]'; // Array en formato de cadena
      const target = '5'; // Target en formato de cadena
      const expected = { numberOne: 1, numberTwo: 4 };

      // Simulamos que el método createLog ha sido llamado correctamente
      twoSumLogServiceMock.createLog = jest.fn().mockResolvedValue(true);

      // Llamamos al método getTwoSum
      const result = await appController.getTwoSum(array, target);
      expect(result).toEqual(expected); // Verificamos que la respuesta sea la esperada
      expect(twoSumLogServiceMock.createLog).toHaveBeenCalled(); // Verificamos que el log se haya creado
    });

    it('should throw a 404 if no pair is found', async () => {
      const array = '[1, 2, 3]'; // Array en formato de cadena
      const target = '10'; // Target en formato de cadena

      // Verificamos que se lance un error si no se encuentra ningún par
      await expect(
        appController.getTwoSum(array, target),
      ).rejects.toThrowError();
    });
  });
});
