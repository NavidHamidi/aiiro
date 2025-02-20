import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name);

  @Post('/ask')
  async ask(@Body() body: { question: string }) {
    this.logger.log(`Received question: ${body.question}`);
    return { response: await this.appService.ask(body.question) };
  }
}
