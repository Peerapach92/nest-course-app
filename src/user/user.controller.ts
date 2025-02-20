import { Controller, Get } from '@nestjs/common';  
import { UserService } from './user.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get() 
  productFunc(): string {
    return this.userService.Userfunc();  
  }
  @Get('/shared')
  shareFunc():string {
    return this.utilityService.shareFunc();
  }
  @Get('/global')
  globalFunc(): string { 
    return this.globalHelperService.globalFunc();
  } 
}