import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// a group of tests for the 'AppController' class
describe('AppController', () => {
  // declares a variable named appController that will hold an instance of AppController
  let appController: AppController;

  // Run before each individual test case ('it' block)
  beforeEach(async () => {
    // 1. Create a simulated NestJS module context containing AppController and AppService
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // 2. Retrieve an instance of AppController from the compiled testing module
    appController = app.get<AppController>(AppController);
  });

  // a group of tests for the 'root' functionality (the home page)
  describe('root', () => {
    //a single test case
    it('should return "Hello World!"', () => {
      // 3. Call the method directly and assert that it returns the expected string
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
