import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChannelCreateNestedManyWithoutMembersInput } from "../inputs/ChannelCreateNestedManyWithoutMembersInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutPostsInput", {
  isAbstract: true
})
export class UserCreateWithoutPostsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => ChannelCreateNestedManyWithoutMembersInput, {
    nullable: true
  })
  channels?: ChannelCreateNestedManyWithoutMembersInput | undefined;
}
