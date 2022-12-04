import { Controller, Get, Header, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Cache-Control', 'none')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('site')
  @Redirect('https://fujia.site', 301)
  officialSite() {
    //
  }

  @Get('books')
  @Redirect('https://fujia.site', 302)
  getBooks(@Query('version') version) {
    if (version && version === '5') {
      return {
        url: 'https://api.fujia.site/api/v1/books',
      };
    }
  }
}
