import DevLevel from '@modules/devLevels/infra/typeorm/entities/DevLevels';

export default interface ICreateDevDTO {
  devLevel: DevLevel;
  name: string;
  sexo: string;
  email: string;
  birth_date: Date;
  age: number;
  hobby: string;
}
