import { Injectable } from '@nestjs/common';

import MoviesEntity from '../entities/Movies.entity';
import MoviesOutput from '../dto/output/Movies.output';
import MoviesInput from '../dto/input/Movies.input';

@Injectable()
export default class MoviesConverter {
  inputToEntity(input: MoviesInput, entity: MoviesEntity) {
    entity.id = input.id;
    entity.titulo = input.titulo;
    entity.imagem = input.imagem;
    entity.user_id = input.user_Id;
    entity.createdAt = new Date();
    entity.updatedAt = new Date();

    return entity;
  }

  entityToOutput(entity: MoviesEntity): MoviesOutput {
    const output = new MoviesOutput();

    output.id = entity.id;
    output.titulo = entity.titulo;
    output.imagem = entity.imagem;
    output.user_ID = entity.user_id;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;

    return output;
  }
}
