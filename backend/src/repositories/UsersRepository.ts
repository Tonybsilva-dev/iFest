import User from '../models/User';
import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(User)
export default class UsersRepository extends Repository<User>{

  public async findByName(name: string): Promise<User | null> {

    const findUser = await this.findOne({
      where: { name },
    });

    return findUser || null
  }


  // public async findById(id: string): Promise<User | null> {

  //   const findUser = await this.findOne({
  //     where: { id }
  //   });

  //   return findUser || null
  // }


}
