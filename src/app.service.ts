import { Injectable } from '@nestjs/common';
import { version } from 'os';

@Injectable()
export class AppService {
  getHello(): { data: { name: string, nickname: string, age: number, hobby: string } } {
    const data = {
      name: 'Peerapach Pudmee',
      nickname: 'P',
      age: 30,
      hobby: 'Play video games',
    };

    return { data };  
  }

  getName(): string {
    return 'Peerapach Pudmee';
  }
  showName(): string {
    return 'I am peerapach pudmee , 18 year old';
  }
  getJSON() {
    console.log('API Version:', process.env.API_VERSION);
    return {
      name: 'Hello, I am Peerapach Pudmee',
      age: '18 year old',
      version: process.env.API_VERSION,
    };
  }  
  
  getgit(){
    return{
      name:'Git and github using',
    }
  }
  getpost(): string {
    return 'we use post u naja';
  }
}

