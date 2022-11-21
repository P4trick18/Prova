import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'nome', type: 'varchar' })
  name: string;

  @Column({ name: 'senha', type: 'varchar' })
  password: string;

  @Column({ name: 'ativo', type: 'boolean' })
  active: boolean;

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
