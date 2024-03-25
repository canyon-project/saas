import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  // 获取启动变量，动态修改.env文件
  const CFG = process.env.CFG;
  if (CFG) {
    console.log('CFG', CFG);
    fs.writeFileSync('./.env', CFG, 'utf8');
  }
  const { AppModule } = await import('./app.module');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
