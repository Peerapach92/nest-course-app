import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    Userfunc():string {
        return ' hello form user';
    }
}
