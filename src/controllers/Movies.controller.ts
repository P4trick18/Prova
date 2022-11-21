import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Post,
  Query,
  Body,
  Put,
} from '@nestjs/common';
import { MoviesService } from '../services/Movies.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import MoviesOutput from '../models/dto/output/Movies.output';
import MoviesInput from '../models/dto/input/Movies.input';

@ApiTags('Movies')
@Controller('Movies')
export class MoviesController {
  constructor(private readonly MoviesService: MoviesService) {}

  @Get()
  @ApiCreatedResponse({ type: MoviesOutput, isArray: true })
  findAll(): Promise<MoviesOutput[]> {
    return this.MoviesService.findAll();
  }

  @Post()
  save(@Body() input: MoviesInput) {
    return this.MoviesService.save(input);
  }
  @Put(':id')
  @ApiCreatedResponse({ type: MoviesOutput })
  update(
    @Param(':id') id: string,
    @Body() input: MoviesInput,
  ): Promise<MoviesOutput> {
    return this.MoviesService.update(+id, input);
  }

  @Get(':id')
  @ApiCreatedResponse({ type: MoviesOutput })
  findOne(@Param('id') id: string) {
    return this.MoviesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: MoviesOutput })
  updateName(@Param('id') id: string, @Query('name') name: string) {
    return this.MoviesService.updateName(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MoviesService.remove(+id);
  }
}
