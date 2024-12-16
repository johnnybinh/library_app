import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_URL,
      port: 2345,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Users],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
      logger: 'advanced-console',
    }),
    BooksModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
