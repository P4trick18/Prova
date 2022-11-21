import { Module } from '@nestjs/common';
import { MoviesService } from '../services/Movies.service';
import { MoviesController } from '../controllers/Movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import MoviesEntity from '../models/entities/Movies.entity';
import MoviesConverter from '../models/converters/Movies.converter';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesEntity])],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesConverter],
})
export class MoviesModule {}
