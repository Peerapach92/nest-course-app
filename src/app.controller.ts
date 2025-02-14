import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()  
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/showname')
  getname(): string {
    return this.appService.getName();
  }
  @Get('/myjson')
  getJson(){
      return this.appService.getJSON();
    }
}
