import { injectable ,inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  cpf: string,
  type: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute ({name, cpf, type, email, password}: IRequest): Promise<User> {
    const checkEmailUserExists = await this.usersRepository.findByEmail(email);

    if (checkEmailUserExists) {
      throw new AppError('Email address already used.')
    }

    const checkCpfUserExists = await this.usersRepository.findByCpf(cpf);

    if (checkCpfUserExists) {
      throw new AppError('Cpf already used.')
    }

    const checkType = !(type=='REVENDEDOR(A)') && !(type=='GERENTE');

    if (checkType) {
      throw new AppError(`Only type REVENDEDOR(A) / GERENTE are accepted`)
    }

    const hashPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      cpf,
      type,
      email,
      password: hashPassword
    })

    return user;
  }
}

export default CreateUserService;
