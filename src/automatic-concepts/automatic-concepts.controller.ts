import { Controller, Get } from '@nestjs/common';
import { AutomaticConceptsService } from './automatic-concepts.service';

@Controller('conceitos-automaticos')
export class AutomaticConceptsController {
  constructor(
    private readonly conceitosAutomaticosService: AutomaticConceptsService,
  ) {}
  @Get()
  home(): string {
    return this.conceitosAutomaticosService.getHome();
  }
}
