import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Swagger
  const config = new DocumentBuilder()
    .setTitle('Astro API') // API Title
    .setDescription('API Documentation for AstrologyApi') // Description
    .setVersion('1.0') // Version
    .addBearerAuth() // Enable JWT Auth in Swagger
    .build();

  // Create Swagger document with all controllers
  const document = SwaggerModule.createDocument(app, config);

  // Setup Swagger UI at /api
  SwaggerModule.setup('api', app, document);

  // Start the app
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
