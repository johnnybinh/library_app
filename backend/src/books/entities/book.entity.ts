import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  status: boolean;
}
