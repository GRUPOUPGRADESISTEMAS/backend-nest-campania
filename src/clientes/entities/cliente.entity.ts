import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Cliente {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  phone: string;

  @Column()
  dni: string;

  @Column()
  email: string;

  @Column()
  profesion: string;

  @Column()
  cargo: string;
}
