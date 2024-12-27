import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutomaticConceptsModule } from './automatic-concepts/automatic-concepts.module';
import { ManualConceptsModule } from './manual-concepts/manual-concepts.module';

@Module({
  imports: [AutomaticConceptsModule, ManualConceptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
