import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { TwoSumLogService } from './twoSumLog.service';

describe('AppController', () => {
  let appController: AppController;

  //create mock of service for testing
  const mockTwoSumLogService = {
    logRequest: jest.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],

      //Inject the mock service into the controller
      providers: [
        {
          provide: TwoSumLogService,
          useValue: mockTwoSumLogService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "ok"', () => {
      expect(appController.getHealth()).toBe('ok');
    });
  });
});
