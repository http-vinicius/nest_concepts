import { Injectable } from '@nestjs/common';

@Injectable()
export class ManualConceptsService {
  solucionaHome(): string {
    return 'Home do Conceitos Manual Solucionada';
  }
}
