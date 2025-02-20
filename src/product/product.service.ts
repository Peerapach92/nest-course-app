import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    productFunc():string{
        return 'we use product service';
    }
    productJson(){
        return{name:' Peerapach Pudmee ',age:'18 year old',hobby:'play game',}
    }
}

