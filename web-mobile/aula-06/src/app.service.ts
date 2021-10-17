import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIMC(peso: number, altura: number): string {
    return `IMC = ${peso / Math.pow(altura, 2)}`;
  }
}
