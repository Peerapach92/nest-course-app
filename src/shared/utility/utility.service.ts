import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
    shareFunc(): string {
        return 'User shared module';
    }
}
