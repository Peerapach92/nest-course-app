import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,

  ) {}

  @Get()
  productFunc(): string {
    return this.productService.productFunc();
  }
  @Get('/productjson')
  productJson() {
    return this.productService.productJson();
  }
  @Get('/shared')
  shareFunc():string {
    return this.utilityService.shareFunc();
  }
  @Get('/global')
globaFunc():string{
  return this.globalHelperService.globalFunc();

  
}
  
}
