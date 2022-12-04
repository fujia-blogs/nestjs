import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Photo } from './photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    default: true,
  })
  isActive: boolean;

  // @OneToMany((type) => Photo, (photo) => photo.user)
  // photos: Photo[];
}
