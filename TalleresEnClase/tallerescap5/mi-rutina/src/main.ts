import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LogTimeInterceptor } from './common/interceptors/log-time.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Validación global de DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

  // 2. Swagger
  const config = new DocumentBuilder()
    .setTitle('API Personal')
    .setDescription('Endpoints para consultar tus hábitos diarios')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalInterceptors(new LogTimeInterceptor());
  await app.listen(3000);
  console.log('API corriendo en http://localhost:3000');
  console.log('Swagger UI en http://localhost:3000/api');
}
bootstrap();
