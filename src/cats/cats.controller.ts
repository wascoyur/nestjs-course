import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  title = (props: string) => {
    return `<h3 style="display: grid;height: 100vh; justify-items: center; align-items: center; ">${props}</h3>`;
  };

  @Get()
  findAll(): string {
    return this.title('Это действие вернет кошек');
  }

  @Get('breed')
  findBreed(): string {
    return this.title('Breed is coming');
  }

  @Get('breed/next')
  findInner(): string {
    return this.title('Inner route');
  }
}
