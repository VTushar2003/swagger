import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { SwaggerController } from './module/swagger/swagger.controller';
import { SwaggerService } from './module/swagger/swagger.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available globally
    }),
    SwaggerModule,
  ],
  controllers: [AppController, SwaggerController],
  providers: [AppService,SwaggerService],
})
export class AppModule {}
