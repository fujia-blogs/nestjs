import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as pkgJSON from '../package.json';

export const genDocs = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle(pkgJSON.name)
    .setDescription(pkgJSON.description)
    .setVersion(pkgJSON.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);
};
