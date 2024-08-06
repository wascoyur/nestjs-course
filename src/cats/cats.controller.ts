import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return '<h3 style="display: grid;height: 100vh; justify-items: center; align-items: center; ">Это действие вернет кошек</h3>';
  }

  @Get('breed')
  findBreed(): string {
    return '<strong style="display: grid;height: 100vh; justify-items: center; align-items: center; ">Это действие вернет breed</strong>';
  }

  @Get('next')
  findInner(): string {
    return '<strong style="display: grid;height: 100vh; justify-items: center; align-items: center; ">Вложенный роут</strong>';
  }
}
