import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
    Orderfunc():string {
        return ' hello form order';
    }
}
