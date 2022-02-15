import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm';

import DevsLevel from '@modules/devLevels/infra/typeorm/entities/DevLevels';

@Entity('dev')
class Dev {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dev_level_id: string;

  @ManyToOne(() => DevsLevel)
  @JoinColumn({ name: 'dev_level_id'})
  devLevel: DevsLevel;

  @Column()
  name: string;

  @Column()
  sexo: string;

  @Column()
  email: string;

  @Column('int')
  age: number;

  @Column()
  hobby: string;

  @CreateDateColumn()
  birth_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Dev;
