import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    Chatfunc():string {
        return ' hello form chat';
    }
}
