import { NestFactory } from '@nestjs/core';

import { genDocs } from './docs';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  genDocs(app);
  await app.listen(3000);
}

bootstrap();
