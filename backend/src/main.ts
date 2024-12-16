import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('TBD')
    .setDescription('Just a WIP Project')
    .setVersion('0.1')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
