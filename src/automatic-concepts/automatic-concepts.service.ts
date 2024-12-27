import { Injectable } from '@nestjs/common';

@Injectable()
export class AutomaticConceptsService {
  getHome() {
    return 'conceitos automáticos (AutomaticConceptsService)';
  }
}
