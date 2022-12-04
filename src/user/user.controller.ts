import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Request,
  Res,
  HttpStatus,
  UseFilters,
  ForbiddenException,
  UsePipes,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { HttpExceptionFilter } from '@/exceptions/http-exception.filter';
import { JoiValidationPipe } from '@/pipes/joi-validation.pipe';
import { ValidationPipe } from '@/pipes/validation.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // @Post()
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send();
  // }

  // @Post()
  // @UseFilters(new HttpExceptionFilter())
  // create(@Body() user: CreateUserDto) {
  //   console.log(user);
  //   throw new ForbiddenException();
  // }

  // @Post()
  // @UsePipes(new JoiValidationPipe({}))
  // create(@Body() user: CreateUserDto) {
  //   return this.userService.create(user);
  // }

  // @Get()
  // findAll(@Req() request: Request) {
  //   console.log(request.text);
  //   return this.userService.findAll();
  // }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
