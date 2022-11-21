import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import MoviesEntity from '../models/entities/Movies.entity';
import { InjectRepository } from '@nestjs/typeorm';

import MoviesConverter from '../models/converters/Movies.converter';
import MoviesInput from '../models/dto/input/Movies.input';
import MoviesOutput from '../models/dto/output/Movies.output';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MoviesEntity)
    private readonly userRepo: Repository<MoviesEntity>,
    private readonly MoviesConverter: MoviesConverter,
  ) {}

  async findAll(): Promise<MoviesOutput[]> {
    const MoviesEntities = await this.userRepo.find();

    const outputList = MoviesEntities.map((entity) => {
      return this.MoviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: MoviesInput) {
    const entity = new MoviesEntity();

    const convertedEntity = this.MoviesConverter.inputToEntity(
      input,
      entity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.MoviesConverter.entityToOutput(savedEntity);

    return output;
  }
  async update(
    id: number,
    input: MoviesInput,
  ): Promise<MoviesOutput> {
    const MoviesEntity = await this.userRepo.findOne({
      where: { id: id },
    });

    const convertedEntity = this.MoviesConverter.inputToEntity(
      input,
      MoviesEntity,
    );

    const savedEntity = await this.userRepo.save(convertedEntity);

    const output = this.MoviesConverter.entityToOutput(savedEntity);

    return output;
  }
  async findOne(id: number) {
    const MoviesEntity = await this.userRepo.findOne({
      where: { id: id },
    });

    const output =
      this.MoviesConverter.entityToOutput(MoviesEntity);

    return output;
  }

  async updateName(id: number, name: string) {
    const MoviesEntity = await this.userRepo.findOne({ where: { id } });

    MoviesEntity.titulo = name;

    const MoviesSaved = await this.userRepo.save(MoviesEntity);

    const output =
      this.MoviesConverter.entityToOutput(MoviesSaved);

    return output;
  }
  s;
  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}
