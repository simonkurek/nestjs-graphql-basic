import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ description: 'User ID' })
  id: string;

  @Field({ description: 'User email' })
  email: string;

  @Field(() => Int, { description: 'User age' })
  age: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;
}
