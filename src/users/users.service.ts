import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserInput: CreateUserInput): User {
    const user = {
      id: uuidv4(),
      ...createUserInput,
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  update(updateUserInput: UpdateUserInput) {
    const user = this.users.find((user) => user.id === updateUserInput.id);
    if (user) {
      Object.assign(user, updateUserInput);
    }
    return user;
  }

  remove(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }
}
