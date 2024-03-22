import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../saas-platform', 'dist'),
      exclude: ['/graphql/(.*)'],
    }),
    ConfigModule.forRoot({
      envFilePath: './.[env]',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
