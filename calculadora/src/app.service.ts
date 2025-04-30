import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //console.log('log');
    //console.debug('debug');
    //console.info('info');
    console.error('error');
    console.warn('warn');
    return 'Hello World!!';
  }
}
