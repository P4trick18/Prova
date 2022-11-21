import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('movies')
export default class MoviesEntity {
  @PrimaryColumn()
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'imagem', type: 'varchar' })
  imagem: string;

  @Column({ name: 'userId', type: 'varchar' })
  user_id: string;

  @Column({
    name: 'criado',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado',
    type: 'timestamp',
  })
  updatedAt: Date;
}
