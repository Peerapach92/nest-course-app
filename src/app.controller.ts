import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from './shared/utility/utility.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ){}

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
  @Get('/github')
  getgithub(){
    return this.appService.getgit();
  }
  @Get('/showpost')
  getpost(){
    return this.appService.getpost();
  }
  @Get('/global')
  globalFunc(): string { 
    return this.globalHelperService.globalFunc();
  } 
}