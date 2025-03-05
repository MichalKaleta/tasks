import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => Int) //tell graph its part of the schema
  id: number;

  @Field()
  author: string;

  @Field()
  title: string;
}
