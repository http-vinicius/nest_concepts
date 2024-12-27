import { Controller, Get } from '@nestjs/common';
import { ManualConceptsService } from './manual-concepts.service';

@Controller('conceitos-manual')
export class ManualConceptsController {
  constructor(private readonly conceitosManualService: ManualConceptsService) {}
  @Get()
  home(): string {
    return this.conceitosManualService.solucionaHome();
  }
}
