import { Module } from '@nestjs/common';
import { SwaggerService } from './swagger.service';
import { SwaggerController } from './swagger.controller';

@Module({
  controllers: [SwaggerController],
  providers: [SwaggerService],
  exports: [SwaggerController],
})
export class SwaggerModule {}
