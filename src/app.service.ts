import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'WE lOVE NEST.JS';
  }

  getName(): string {
    return 'Peerapach Pudmee';
  }
  showName(): string {
    return 'I am peerapach pudmee , 18 year old';
  }
  getJSON(){
    return{
      name:'Hello, I am Peerapach Pudmee ',
      age:'18 year old',
    }
  }
}

